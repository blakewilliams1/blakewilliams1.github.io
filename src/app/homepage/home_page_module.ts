import { NgModule } from '@angular/core';
import { HomePage } from "./home_page";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        HomePageRoutingModule,
        MatCardModule,
    ],
    exports: [HomePage],
})
export class HomePageModule { }
