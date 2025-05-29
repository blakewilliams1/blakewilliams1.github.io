import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';

@Component({
  selector: 'mauritania-trip-page',
  templateUrl: './mauritania_trip_page.html',
  styleUrls: ['./mauritania_trip_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
      YoutubePlaceholder,
  ],
})
export class MauritaniaTripPage {
  
}

