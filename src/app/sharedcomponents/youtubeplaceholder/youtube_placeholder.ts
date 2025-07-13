import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterContentInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'youtube-placeholder',
  templateUrl: './youtube_placeholder.html',
  styleUrls: ['./youtube_placeholder.scss'],
  standalone: true,
  imports: [
    CommonModule, 
  ],
})
export class YoutubePlaceholder implements AfterContentInit {
  @Input('videoId') videoId = '';
  private readonly API_KEY = "AIzaSyAgB_ANPJ3PENDu2MGFWRycAkoFfnT1Q3U";
  private readonly YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${this.API_KEY}&`;
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
  private isBrowser : boolean = false;
  title: string= "";

  constructor(
    private readonly self: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterContentInit(): void {
    this.afterViewHasRan = true;

    // Obtain the youtube video title.
    if (this.isBrowser) {
      fetch(`${this.YOUTUBE_API_URL}&id=${this.videoId}`)
          .then(response => response.json())
          .then(response => {
            const data = response as YoutubeTitleResponse;
            this.title = data.items[0]?.snippet.localized.title;
            this.cdr.detectChanges();
          });
		}
  }

  getThumbnailSize(): string {
    if (!this.afterViewHasRan) {
      return 'hqdefault';
    }

    for (let pairing of this.imageSizesToYoutubeSuffixArray) {
      // If the current width/suffix pairing is smaller than the screen real estate provided to us
      // by the browser, skip it and check the next largest pairing.
      if (this.self.nativeElement.offsetWidth > pairing.width) {
        continue;
      }

      return pairing.suffix;
    }

    return 'hqdefault';
  }

  onYoutubeClick() {
    if (!this.self) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allow", "autoplay; accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.style.width = "100%";
    iframe.style.aspectRatio = "16 / 9";
    this.self.nativeElement.replaceWith(iframe);
  }
}

interface ImageSizeToThumbnailSuffix {
  width: number,
  suffix: string,
}

// A representation of a response from the Youtube data API, only the properties I care about.
interface YoutubeTitleResponse {
  items: Array<{
    snippet: {
      localized: {
        title: string,
      }
    }
  }>;
}
