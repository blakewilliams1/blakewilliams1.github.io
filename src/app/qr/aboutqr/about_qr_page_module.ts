import { NgModule } from "@angular/core";
import { AboutQrPage } from "./about_qr_page";
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { ImageResizerDirectiveModule } from "../../sharedcomponents/imageresizerdirective/image_resizer_directive_module";


const routes: Routes = [
    {
        path: '',
        component: AboutQrPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutQrPageRoutingModule { }

@NgModule({
    declarations: [
        AboutQrPage,
    ],
    imports: [
        MatCardModule,
        CommonModule,
        ImageResizerDirectiveModule,
        AboutQrPageRoutingModule,
    ],
    exports: [AboutQrPage],
})
export class AboutQrPageModule {}
