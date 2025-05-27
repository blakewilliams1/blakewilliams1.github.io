import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ImageResizerDirective } from '../sharedcomponents/imageresizerdirective/image_resizer_directive';

@Component({
    selector: 'travels-page',
    templateUrl: './travels_page.html',
    styleUrls: ['travels_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        ImageResizerDirective,
        RouterModule,
    ],
})
export class TravelsPage {

}
