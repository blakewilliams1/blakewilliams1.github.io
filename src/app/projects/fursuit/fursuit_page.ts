import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'fursuit-page',
  templateUrl: './fursuit_page.html',
  styleUrls: ['./fursuit_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class FursuitPage {

}
