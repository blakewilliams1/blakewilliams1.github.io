import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';
import { ScrollspyComponent } from '../../sharedcomponents/scrollspy/scrollspy_component';

@Component({
  selector: 'burning-man-2023-page',
  templateUrl: './burning_man_2023_page.html',
  styleUrls: ['./burning_man_2023_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
      ScrollspyComponent,
      YoutubePlaceholder,
  ],
})
export class BurningMan2023Page {

}
