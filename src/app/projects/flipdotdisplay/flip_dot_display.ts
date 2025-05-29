import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';

@Component({
  selector: 'flip-dot-display-page',
  templateUrl: './flip_dot_display.html',
  styleUrls: ['./flip_dot_display.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
      YoutubePlaceholder,
  ],
})
export class FlipDotDisplayPage {

}
