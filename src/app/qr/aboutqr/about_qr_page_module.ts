import { NgModule } from "@angular/core";
import { AboutQrPage } from "./about_qr_page";
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { ImageResizerDirectiveModule } from 'src/app/sharedcomponents/imageresizerdirective/image_resizer_directive_module';


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
        MatTabsModule,
        CommonModule,
        ImageResizerDirectiveModule,
        AboutQrPageRoutingModule,
    ],
    exports: [AboutQrPage],
})
export class AboutQrPageModule {}
