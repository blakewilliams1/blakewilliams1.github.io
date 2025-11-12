import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { ScrollspyComponent } from "../../sharedcomponents/scrollspy/scrollspy_component";

@Component({
  selector: 'fursuit-page',
  templateUrl: './fursuit_page.html',
  styleUrls: ['./fursuit_page.scss'],
  standalone: true,
  imports: [
      ScrollspyComponent,
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class FursuitPage {

}
