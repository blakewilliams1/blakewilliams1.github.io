import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';
import { ScrollspyComponent } from '../../sharedcomponents/scrollspy/scrollspy_component';

@Component({
  selector: 'indonesia-2018-page',
  templateUrl: './indonesia_2019_page.html',
  styleUrls: ['./indonesia_2019_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
      ScrollspyComponent,
      YoutubePlaceholder,
  ],
})
export class Indonesia2019Page {

}
