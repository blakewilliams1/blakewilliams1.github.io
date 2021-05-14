import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from "./home_page";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        BrowserModule,
    ],
    exports: [HomePage],
})
export class HomePageModule { }
