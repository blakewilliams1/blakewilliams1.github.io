import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
@Component({
  selector: 'youtube-placeholder',
  templateUrl: './youtube_placeholder.html',
  styleUrls: ['./youtube_placeholder.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class YoutubePlaceholder implements AfterContentInit {
  @Input('videoId') videoId = '';
  @ViewChild('placeholder', {static: true}) placeholder!: ElementRef;
  // Standard thumbnail sizes associated with their file names.
  private readonly imageSizesToYoutubeSuffixArray: ImageSizeToThumbnailSuffix[] = [
    {
      width: 120,
      suffix: 'default',
    },
    {
      width: 320,
      suffix: 'mqdefault',
    },
    {
      width: 480,
      suffix: 'hqdefault',
    },
    {
      width: 640,
      suffix: 'sddefault',
    },
    {
      width: 1280,
      suffix: 'maxresdefault',
    },
  ];
  private afterViewHasRan: boolean = false;


  ngAfterContentInit(): void {
    this.afterViewHasRan = true;
  }

  getThumbnailSize(): string {
    if (!this.afterViewHasRan) {
      return 'hqdefault';
    }

    for (let pairing of this.imageSizesToYoutubeSuffixArray) {
      // If the current width/suffix pairing is smaller than the screen real estate provided to us
      // by the browser, skip it and check the next largest pairing.
      if (this.placeholder.nativeElement.offsetWidth > pairing.width) {
        continue;
      }

      return pairing.suffix;
    }

    return 'hqdefault';
  }

  onYoutubeClick() {
    const el = this.placeholder.nativeElement; 
    if (el == null) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.style.width = "100%";
    iframe.style.aspectRatio = "16 / 9";
    el.replaceWith(iframe);
  }
}

interface ImageSizeToThumbnailSuffix {
  width: number,
  suffix: string,
}
