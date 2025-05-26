import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mountainboard-page',
  templateUrl: './mountainboard_page.html',
  styleUrls: ['./mountainboard_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class MountainboardPage {

}
