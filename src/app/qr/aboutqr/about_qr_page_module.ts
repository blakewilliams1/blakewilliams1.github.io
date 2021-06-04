import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AboutQrPage } from "./about_qr_page";
import { Routes, RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";


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
        MatExpansionModule,
        CommonModule,
        AboutQrPageRoutingModule,
        HttpClientModule
    ],
    exports: [AboutQrPage],
})
export class AboutQrPageModule {}
