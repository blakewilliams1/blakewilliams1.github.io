import { NgModule } from '@angular/core';
import { HalfDomeHikePage } from "./half_dome_hike_page";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';

const routes: Routes = [
    {
        path: '',
        component: HalfDomeHikePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HalfDomeHikePageRoutingModule { }

@NgModule({
    declarations: [
      HalfDomeHikePage,
    ],
    imports: [
        CommonModule,
        HalfDomeHikePageRoutingModule,
        ImageResizerDirectiveModule,
        MatCardModule,
    ],
    exports: [HalfDomeHikePage],
})
export class HalfDomeHikePageModule { }
