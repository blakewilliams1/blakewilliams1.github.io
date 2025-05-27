import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
  selector: 'smart-pay-watch-page',
  templateUrl: './smart_pay_watch_page.html',
  styleUrls: ['./smart_pay_watch_page.scss'],
  standalone: true,
  imports: [
      ImageResizerDirective,
      MatCardModule,
  ],
})
export class SmartPayWatchPage {

}
