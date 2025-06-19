import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'image-viewer-dialog',
  template: `<div><img #image id="image" [src]="data.imageUrl" (load)="onImageLoad()" (click)="closeDialog()"/></div>`,
  styles: `
    div {
      overflow: hidden;
      max-width: 95vw;
      max-height: 95vh;
    }
    img {
      width: 100%;
      will-change: transform;
    }
  `,
    imports: [
        CommonModule,
    ],
})
export class ImageViewerDialog implements AfterViewInit, OnDestroy {
  @ViewChild('image') image!: ElementRef;
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<ImageViewerDialog>);
  private startX: number = 0;
  private startY: number = 0;
  private scale: number = 1;
  private isDragging: boolean = false;
  private offsetX: number = 0;
  private offsetY: number = 0;
  
  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    document.addEventListener('dragstart', this.onDragStart);
    document.addEventListener('drag', this.onDrag);
    document.addEventListener('dragend', this.onDragEnd);
    document.addEventListener('wheel', this.onWheelScroll);
    this.updateCursorStyle();
  }

  onImageLoad() {
    // Once the image loads, calculate the natural aspect ratio and apply it to the container. This ensures that the
    // material dialog has the correct aspect ratio when for the image.
    const aspectRatio = this.image.nativeElement.offsetWidth / this.image.nativeElement.offsetHeight;
    this.renderer.setStyle(this.image.nativeElement.parentNode, 'aspect-ratio', aspectRatio);
  }

  private onWheelScroll = (event: WheelEvent) => {
    console.log(event);
    // Zoom in multiplicative by 1.1x so deeper zooming doesn't feel weak.
    const scaleIncrement = event.deltaY > 0 ? 1/1.1 : 1.1;
    this.scale = Math.max(1, Math.min(this.scale * scaleIncrement, 10));

    // Add some translate to make it zoom in relative to the mouse position.
    const centerCoordX = window.innerWidth / 2;
    const centerCoordY = window.innerHeight / 2;
    const imageWidth = this.image.nativeElement.offsetWidth;
    const imageHeight = this.image.nativeElement.offsetHeight;
    // Percents from center tell how far the mouse cursor is from the image center to image border.
    const percentFromCenterX = (centerCoordX - event.clientX) / (imageWidth / 2);
    const percentFromCenterY = (centerCoordY - event.clientY) / (imageHeight / 2);
    
    const container =  this.image.nativeElement.parentNode;
    const dialogWidth = container.offsetWidth;
    const dialogHeight = container.offsetHeight;
    // Using the percents from above, explicitly set the translates to be the max distance over before
    // clamping * percent the cursor is over. We want zero translate if the cursor is in dead center but
    // full possible translate if it's on the border edge. Not perfect, assumes user never moves cursor
    // location while scrolling in.
    this.offsetX = percentFromCenterX * (imageWidth * this.scale - dialogWidth) / 2;
    this.offsetY = percentFromCenterY * (imageHeight * this.scale - dialogHeight) / 2;

    this.updateImagePosition();
  }

  private onDragStart = (event: DragEvent) => {
    this.startX = event.clientX - this.offsetX;
    this.startY = event.clientY - this.offsetY;
    this.isDragging = true;
  }

  private onDrag = (event: DragEvent) => {
    if (!this.isDragging) {
      return;
    }
    // Events at (0,0) are basically guaranteed to be red herrings. Chrome emits one event like this on mouse up.
    if (event.clientX == 0 && event.clientY == 0) {
      return;
    }

    this.offsetX = event.clientX - this.startX;
    this.offsetY = event.clientY - this.startY;
    this.updateImagePosition();
  }

  private onDragEnd = () => {
    this.isDragging = false;
  }

  private updateImagePosition() {
    // These variables immensely helped while writing the clamping logic,
    const container =  this.image.nativeElement.parentNode;
    const dialogWidth = container.offsetWidth;
    const dialogHeight = container.offsetHeight;
    const imageWidth = this.image.nativeElement.offsetWidth;
    const imageHeight = this.image.nativeElement.offsetHeight;

    // Clamp how much the image can be dragged towards the right
    this.offsetX = Math.min(this.offsetX, (imageWidth * this.scale - dialogWidth) / 2);
    // Clamp how much the image cna be dragged towards the bottom
    this.offsetY = Math.min(this.offsetY, (imageHeight * this.scale - dialogHeight) / 2);
    // Clamp how much the image can be dragged towards the left
    this.offsetX = Math.max(this.offsetX,  -1 * (imageWidth * this.scale - dialogWidth) / 2);
    // Clamp how much the image can be dragged towards the top
    this.offsetY = Math.max(this.offsetY,  -1 * (imageHeight * this.scale - dialogHeight) / 2);
    
    console.log(`translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`);
    this.renderer.setStyle(
      this.image.nativeElement,
      'transform',
      `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`);

      this.updateCursorStyle();
  }

  private updateCursorStyle() {
    this.renderer.setStyle(
        this.image.nativeElement,
        'cursor',
        this.scale <= 1 ? 'zoom-in' : 'grab');
  }

  closeDialog() {
    if (this.isDragging) {
      return;
    }

    this.dialogRef.close();
  }

  ngOnDestroy() {
    // Cleans up and prevents lingering listeners.
    document.removeEventListener('dragstart', this.onDragStart);
    document.removeEventListener('drag', this.onDrag);
    document.removeEventListener('dragend', this.onDragEnd);
    document.removeEventListener('wheel', this.onWheelScroll);
  }
}
