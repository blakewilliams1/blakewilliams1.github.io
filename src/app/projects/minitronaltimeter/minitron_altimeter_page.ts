import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'minitron-altimeter-page',
  templateUrl: './minitron_altimeter_page.html',
  styleUrls: ['./minitron_altimeter_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class MinitronAltimeterPage {
}
