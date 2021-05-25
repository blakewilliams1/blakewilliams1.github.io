import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QRLandingPageModule { }
