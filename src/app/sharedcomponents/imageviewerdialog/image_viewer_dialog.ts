import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  selector: 'image-viewer-dialog',
  template: `<div><img #image id="image" [src]="data.imageUrl" (load)="onImageLoad()" (click)="toggleZoomLevel($event)"/></div>`,
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
  private scale: number = 1;
  private offsetX: number = 0;
  private offsetY: number = 0;
  
  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.updateCursorStyle();
  }

  onImageLoad() {
    // Once the image loads, calculate the natural aspect ratio and apply it to the container. This ensures that the
    // material dialog has the correct aspect ratio when for the image.
    const aspectRatio = this.image.nativeElement.offsetWidth / this.image.nativeElement.offsetHeight;
    this.renderer.setStyle(this.image.nativeElement.parentNode, 'aspect-ratio', aspectRatio);
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
        this.scale <= 1 ? 'zoom-in' : 'zoom-out');
  }

  
  private onMouseMove = (event: MouseEvent) => {
    if (this.scale == 1) {
      return;
    }

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
    // full possible translate if it's on the border edge.
    this.offsetX = percentFromCenterX * (imageWidth * this.scale - dialogWidth) / 2;
    this.offsetY = percentFromCenterY * (imageHeight * this.scale - dialogHeight) / 2;

    this.updateImagePosition();
  }

  toggleZoomLevel(event: MouseEvent) {
    if (this.scale > 1) {
      this.scale = 1;
    } else {
      this.scale = 2;
    }

    this.onMouseMove(event);
    this.updateImagePosition();
    this.updateCursorStyle();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }
}
