import { Component } from '@angular/core';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mauritania-trip-page',
  templateUrl: './mauritania_trip_page.html',
  styleUrls: ['./mauritania_trip_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirectiveModule,
      MatCardModule,
  ],
})
export class MauritaniaTripPage {
  
}

