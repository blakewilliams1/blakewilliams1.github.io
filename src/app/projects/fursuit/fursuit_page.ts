import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'fursuit-page',
  templateUrl: './fursuit_page.html',
  styleUrls: ['./fursuit_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class FursuitPage {

}
