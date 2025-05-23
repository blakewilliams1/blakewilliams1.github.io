import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'burning-man-2023-page',
  templateUrl: './burning_man_2023_page.html',
  styleUrls: ['./burning_man_2023_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class BurningMan2023Page {

}
