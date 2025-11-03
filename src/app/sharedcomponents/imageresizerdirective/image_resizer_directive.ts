import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';
import { ImageViewerDialogService } from '../imageviewerdialog/image_viewer_dialog_service';

@Directive({
  selector: '[imgurId]',
  standalone: true,
})
// This Directive is used to calculate the image URL of images stored in Imgur at resolutions that help reduce bandwidth usages.
export class ImageResizerDirective implements AfterViewInit {
  @Input('imgurId') imgurId = '';
  @Input('aspectRatio') aspectRatio = '';
  @Input('preventDialogOpening') preventDialogOpening = false;
  private readonly imgurUrlPattern = 'https://imgur.com/';
  private readonly minWidthToExpandModal = 1500;
  // This static mapping was created based on the info here:
  // https://meta.stackexchange.com/questions/298818
  private readonly imageSizesToImgurSuffixArray: ImageSizeToImgurSuffix[] = [
    {
      width: 320,
      suffix: 'm',
    },
    {
      width: 640,
      suffix: 'l',
    },
    {
      width: 1024,
      suffix: 'h',
    },
  ];

  // Keeps track of the last calculated img size suffix. This helps ensure that on window size
  // change we are not making excessive calls to change the image src attribute. 
  private lastCalculatedSuffix: string | undefined = undefined;
  private lastCalculatedWidth = 0;
  // Exists to ensure that the <img> src attribute doesn't change before initial hydration is done, as DOM mismatch
  // will cause errors that break the application.
  private afterViewInitFinished = false;
  private windowWidth: number = 0;

  constructor(
    private readonly element: ElementRef,
		private readonly renderer: Renderer2,
    private readonly dialogImageService: ImageViewerDialogService) {}

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
    this.calculateSrcAttribute();
    setTimeout(() => this.afterViewInitFinished = true);

    if (!!this.aspectRatio) {
      this.renderer.setStyle(
					this.element.nativeElement,
					'aspect-ratio',
					this.getAspectRatioNumber() + '');
    }
  }

  // Recalculate the needed suffix for the imgur images, then apply the change if it's different than before.
  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
    if (!this.afterViewInitFinished) {
      return;
    }
    this.calculateSrcAttribute();
  }

  // On image click, fire off an event to the image viewer dialog service. This will open an image viewing dialog
  // at full image resolution.
  @HostListener('click')
  onClick() {
    // Forward the URL to a full sized image without any downscaling.
    if (!this.preventDialogOpening && this.windowWidth > this.minWidthToExpandModal) {
      this.dialogImageService.emitImageClick(`${this.imgurUrlPattern}${this.imgurId}.jpg`);
    }
  }

  // Dynamically bind the cursor style based on if the image can be clicked and expanded into a modal.
  @HostBinding('style.cursor') get cursor() {
    if (!this.afterViewInitFinished) {
      return null;
    }

    if (this.preventDialogOpening) {
      return null;
    }

    return this.windowWidth > this.minWidthToExpandModal ? 'pointer' : null;
  }

private calculateSrcAttribute() {
    // Determine the amount of pixels that the browser is going to allocate to this image.
    const aspectRatioMultiplier = !!this.aspectRatio ? this.getAspectRatioNumber() : 16 / 9;
    let renderedWidth = this.element.nativeElement.width;
    const longestEdge = aspectRatioMultiplier > 1 ? renderedWidth : renderedWidth / aspectRatioMultiplier;
    // Don't recalculate or re-download a smaller size image if we already have a higher fidelity version on hand.
   if (longestEdge < this.lastCalculatedWidth) {
    return;
   }

    // Obtain the proper imgur suffix for correct thumbnail size.
    const chosenSuffix = this.chooseSuffix(longestEdge);
    // If we just recalculated the suffix to be the same as it just was, don't bother changing the
    // image src attribute.
    if (this.lastCalculatedSuffix != undefined && chosenSuffix == this.lastCalculatedSuffix) {
      return;
    }
    this.lastCalculatedSuffix = chosenSuffix;
    this.lastCalculatedWidth = longestEdge;

    // Construct the full URL of the image at the desired resolution.
    const imgurUrl = `${this.imgurUrlPattern}${this.imgurId}${chosenSuffix}.jpg`;

    // Set attribute source so the image is loaded.
    this.renderer.setAttribute(this.element.nativeElement, 'src', imgurUrl);
  }

  private chooseSuffix(longestEdge: number): string {
    for (let pairing of this.imageSizesToImgurSuffixArray) {
      // If the current width/suffix pairing is smaller than the screen real estate provided to us
      // by the browser, skip it and check the next largest pairing.
      if (longestEdge > pairing.width) {
        continue;
      }

      return pairing.suffix;
    }

    return '';
  }
  private getAspectRatioNumber() {
    return Function('"use strict"; return ' + this.aspectRatio)();
  }
}

export interface ImageSizeToImgurSuffix {
  width: number,
  suffix: string,
}
