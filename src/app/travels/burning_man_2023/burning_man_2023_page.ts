import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';

@Component({
  selector: 'burning-man-2023-page',
  templateUrl: './burning_man_2023_page.html',
  styleUrls: ['./burning_man_2023_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
      YoutubePlaceholder,
  ],
})
export class BurningMan2023Page {

}
