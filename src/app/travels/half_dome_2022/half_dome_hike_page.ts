import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'half-dome-hike-page',
  templateUrl: './half_dome_hike_page.html',
  styleUrls: ['./half_dome_hike_page.scss'],
  standalone: true,
  imports: [
      CommonModule,
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class HalfDomeHikePage {

}
