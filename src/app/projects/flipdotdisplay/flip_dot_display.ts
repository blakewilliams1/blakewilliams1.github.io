import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'flip-dot-display-page',
  templateUrl: './flip_dot_display.html',
  styleUrls: ['./flip_dot_display.scss'],
  standalone: true,
  imports: [
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class FlipDotDisplayPage {

}
