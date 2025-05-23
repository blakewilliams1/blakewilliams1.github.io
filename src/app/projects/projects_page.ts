import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ImageResizerDirectiveModule } from '../sharedcomponents/imageresizerdirective/image_resizer_directive_module';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'projects-page',
    templateUrl: './projects_page.html',
    styleUrls: ['projects_page.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        CommonModule,
        ImageResizerDirectiveModule,
        RouterModule,
    ]
})
export class ProjectsPage {

}
