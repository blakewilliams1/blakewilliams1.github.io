import { NgModule } from '@angular/core';
import { MauritaniaTripPage } from "./mauritania_trip_page";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageResizerDirectiveModule } from '../../sharedcomponents/imageresizerdirective/image_resizer_directive_module';

const routes: Routes = [
    {
        path: '',
        component: MauritaniaTripPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MauritaniaTripPageRoutingModule { }

@NgModule({
    declarations: [
        MauritaniaTripPage,
    ],
    imports: [
        CommonModule,
        MauritaniaTripPageRoutingModule,
        ImageResizerDirectiveModule,
        MatCardModule,
    ],
    exports: [MauritaniaTripPage],
})
export class MauritaniaTripPageModule { }
