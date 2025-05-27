import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'flip-dot-display-page',
  templateUrl: './flip_dot_display.html',
  styleUrls: ['./flip_dot_display.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class FlipDotDisplayPage {

}
