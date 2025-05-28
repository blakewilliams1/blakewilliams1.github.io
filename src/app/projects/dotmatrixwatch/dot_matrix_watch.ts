import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'flip-dot-display-page',
  templateUrl: './dot_matrix_watch.html',
  styleUrls: ['./dot_matrix_watch.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class DotMatrixWatchPage {

}
