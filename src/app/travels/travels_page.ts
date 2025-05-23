import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirectiveModule } from '../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'travels-page',
    templateUrl: './travels_page.html',
    styleUrls: ['travels_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        ImageResizerDirectiveModule,
        RouterModule,
    ],
})
export class TravelsPage {

}
