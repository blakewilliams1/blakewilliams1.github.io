import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { TravelsPage } from "./travels_page";

const routes: Routes = [
    {
        path: '',
        component: TravelsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TravelsPageRoutingModule { }

@NgModule({
    declarations: [
      TravelsPage,
    ],
    imports: [
        MatCardModule,
        CommonModule,
        MatTabsModule,
        TravelsPageRoutingModule,
    ],
    exports: [TravelsPage],
})
export class TravelsPageModule { }
