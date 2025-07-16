import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { YoutubePlaceholder } from '../../sharedcomponents/youtubeplaceholder/youtube_placeholder';
import { ScrollspyComponent } from "../../sharedcomponents/scrollspy/scrollspy_component";

@Component({
  selector: 'mountainboard-page',
  templateUrl: './mountainboard_page.html',
  styleUrls: ['./mountainboard_page.scss'],
  standalone: true,
  imports: [
    ImageResizerDirective,
    YoutubePlaceholder,
    MatCardModule,
    ScrollspyComponent
],
})
export class MountainboardPage {

}
