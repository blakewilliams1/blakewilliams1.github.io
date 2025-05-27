import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirective } from '../sharedcomponents/imageresizerdirective/image_resizer_directive';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'projects-page',
    templateUrl: './projects_page.html',
    styleUrls: ['projects_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        ImageResizerDirective,
        RouterModule,
    ]
})
export class ProjectsPage {

}
