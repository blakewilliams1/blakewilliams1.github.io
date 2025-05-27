import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'mauritania-trip-page',
  templateUrl: './mauritania_trip_page.html',
  styleUrls: ['./mauritania_trip_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class MauritaniaTripPage {
  
}

