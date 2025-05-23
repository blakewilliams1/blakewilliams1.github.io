import { NgModule } from '@angular/core';
import { ShastaTripPage } from "./shasta_page";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';

const routes: Routes = [
    {
        path: '',
        component: ShastaTripPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShastaPageRoutingModule { }

@NgModule({
    declarations: [
      ShastaTripPage,
    ],
    imports: [
        CommonModule,
        ShastaPageRoutingModule,
        ImageResizerDirectiveModule,
        MatCardModule,
    ],
    exports: [ShastaTripPage],
})
export class ShastaTripPageModule { }
