import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'shasta-page',
  templateUrl: './shasta_page.html',
  styleUrls: ['./shasta_page.scss'],
  standalone: true,
  imports: [
      CommonModule,
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class ShastaTripPage {
  
}
