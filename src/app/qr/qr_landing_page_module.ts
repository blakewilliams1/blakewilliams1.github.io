import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { QRLandingPage } from "./qr_landing_page";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: '',
        component: QRLandingPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QRLandingPageRoutingModule { }

@NgModule({
    declarations: [
        QRLandingPage
    ],
    imports: [
        QRLandingPageRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [QRLandingPage],
})
export class QRLandingPageModule { }
