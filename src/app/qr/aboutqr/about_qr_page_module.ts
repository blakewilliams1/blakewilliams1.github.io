import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AboutQrPage } from "./about_qr_page";

@NgModule({
    declarations: [
        AboutQrPage,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    exports: [AboutQrPage],
})
export class AboutQrPageModule {}
