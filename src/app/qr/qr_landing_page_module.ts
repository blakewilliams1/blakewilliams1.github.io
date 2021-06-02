import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { QRLandingPage } from "./qr_landing_page";

@NgModule({
    declarations: [
        QRLandingPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [QRLandingPage],
})
export class QRLandingPageModule { }
