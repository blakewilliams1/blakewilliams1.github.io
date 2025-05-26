import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
@Directive({
  selector: '[imgurId]',
})
// This Directive is used to calculate the image URL of images stored in Imgur at resolutions that help reduce bandwidth usages.
export class ImageResizerDirective implements AfterViewInit {
  @Input('imgurId') imgurId = '';
  @Input('isLandscape') isLandscape = false;
  private readonly imgurUrlPattern = 'https://imgur.com/';
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

  constructor(private element: ElementRef) {}

  ngAfterViewInit() {
    this.calculateSrcAttribute();
    this.afterViewInitFinished = true;
  }

  // Recalculate the needed suffix for the imgur images, then apply the change if it's different than before.
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (!this.afterViewInitFinished) {
      return;
    }
    this.calculateSrcAttribute();
  }

  private calculateSrcAttribute() {
    // Determine the amount of pixels that the browser is going to allocate to this image.
    let renderedWidth = this.element.nativeElement.width;
    // Landscape photos will inherently take up more of the screen and be stretched larger. Here we assume
    // that all photos are 16:9 and adjust the renderedWidth variable accordingly.
    if (this.isLandscape) {
      renderedWidth = (renderedWidth * 16) / 9;
    }
    // Don't recalculate or re-download a smaller size image if we already have a higher fidelity version on hand.
    if(renderedWidth < this.lastCalculatedWidth) {
      return;
    }

    // Obtain the proper imgur suffix for correct thumbnail size.
    const chosenSuffix = this.chooseSuffix(renderedWidth);
    // If we just recalculated the suffix to be the same as it just was, don't bother changing the
    // image src attribute.
    if (this.lastCalculatedSuffix != undefined && chosenSuffix == this.lastCalculatedSuffix) {
      return;
    }
    this.lastCalculatedSuffix = chosenSuffix;
    this.lastCalculatedWidth = renderedWidth;

    // Construct the full URL of the image at the desired resolution.
    const imgurUrl = `${this.imgurUrlPattern}${this.imgurId}${chosenSuffix}.jpg`;

    // Set attribute source so the image is loaded.
    this.element.nativeElement.setAttribute('src', imgurUrl);
  }

  private chooseSuffix(renderedWidth: number): string {
    for (let pairing of this.imageSizesToImgurSuffixArray) {
      // If the current width/suffix pairing is smaller than the screen real estate provided to us
      // by the browser, skip it and check the next largest pairing.
      if (renderedWidth > pairing.width) {
        continue;
      }

      return pairing.suffix;
    }

    return '';
  } 
}

export interface ImageSizeToImgurSuffix {
  width: number,
  suffix: string,
}
