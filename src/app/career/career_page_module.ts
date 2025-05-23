import { NgModule } from '@angular/core';
import { CareerPage } from "./career_page";
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponentModule } from '../sharedcomponents/verticaltimeline/vertical_timeline_module';

const routes: Routes = [
    {
        path: '',
        component: CareerPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CareerRoutingModule { }

@NgModule({
    declarations: [
        CareerPage,
    ],
    imports: [
        CommonModule,
        TimelineComponentModule,
        CareerRoutingModule,
        MatCardModule,
    ],
    exports: [CareerPage],
})
export class CareerPageModule { }
