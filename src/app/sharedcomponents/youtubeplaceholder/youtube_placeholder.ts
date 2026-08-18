import { CommonModule } from '@angular/common';
import { signal, afterNextRender, Component, ElementRef, HostListener, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'youtube-placeholder',
  templateUrl: './youtube_placeholder.html',
  styleUrls: ['./youtube_placeholder.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule, 
  ],
})
export class YoutubePlaceholder {
  @Input('videoId') videoId = '';
  private readonly API_KEY = "AIzaSyAgB_ANPJ3PENDu2MGFWRycAkoFfnT1Q3U";
  private readonly YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${this.API_KEY}&`;
  // Standard thumbnail sizes associated with their file names.
  private readonly imageSizesToYoutubeSuffixArray: ImageSizeToThumbnailSuffix[] = [
    {width: 120, suffix: 'default'},
    {width: 320, suffix: 'mqdefault'},
    {width: 480, suffix: 'hqdefault'},
    {width: 640, suffix: 'sddefault'},
    // Note: This largest thumbnail size occasionally isn't available on some vidoes.
    {width: 1280, suffix: 'maxresdefault'},
  ];
  title = signal("");
  serializedThumbnail = signal("");

  constructor(private readonly self: ElementRef) {
    afterNextRender(() => {
      this.loadVideoTitle();
      this.loadVideoThumbnail();
    });
  }

  private loadVideoTitle() {
    fetch(`${this.YOUTUBE_API_URL}&id=${this.videoId}`)
        .then(response => response.json())
        .then(response => {
          const data = response as YoutubeTitleResponse;
          this.title.set(data.items[0]?.snippet.localized.title);
        });
  }

  // Currently does not account for window resizing.
  private async loadVideoThumbnail(): Promise<void> {
    const thumbnailUrl =
        `https://i.ytimg.com/vi/${this.videoId}/${this.getThumbnailSize()}.jpg`;

    try {
      let response = await fetch(thumbnailUrl);

      // Fall back if maxresdefault fails
      if (!response.ok && response.url.includes('maxresdefault')) {
        response = await fetch(`https://i.ytimg.com/vi/${this.videoId}/sddefault.jpg`);
      }

      // Inline conversion to base64
      const blob = await response.blob();
      const base64Url = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      this.serializedThumbnail.set(base64Url);
    } catch (error) {
      console.error('Error fetching thumbnail:', error);
    }
  }

  getThumbnailSize(): string {
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
