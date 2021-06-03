import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from "./home_page";
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        BrowserModule,
        MatTabsModule,
        MatCardModule,
    ],
    exports: [HomePage],
})
export class HomePageModule { }
