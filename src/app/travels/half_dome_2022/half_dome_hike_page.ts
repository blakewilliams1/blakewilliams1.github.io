import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'half-dome-hike-page',
  templateUrl: './half_dome_hike_page.html',
  styleUrls: ['./half_dome_hike_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class HalfDomeHikePage {

}
