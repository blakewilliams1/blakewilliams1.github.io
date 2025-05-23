import { NgModule } from '@angular/core';
import { FursuitPage } from "./fursuit_page";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';

const routes: Routes = [
    {
        path: '',
        component: FursuitPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FursuitPageRoutingModule { }

@NgModule({
    declarations: [
      FursuitPage,
    ],
    imports: [
        CommonModule,
        FursuitPageRoutingModule,
        ImageResizerDirectiveModule,
        MatCardModule,
    ],
    exports: [FursuitPage],
})
export class FursuitPageModule { }
