import { NgModule } from '@angular/core';
import { FursuitPage } from "./fursuit_page";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: FursuitPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FursuitPageRoutingModule { }

@NgModule({
    declarations: [
      FursuitPage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        FursuitPageRoutingModule,
        MatCardModule,
    ],
    exports: [FursuitPage],
})
export class FursuitPageModule { }
