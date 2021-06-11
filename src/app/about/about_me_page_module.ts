import { NgModule } from '@angular/core';
import { AboutMePage } from "./about_me_page";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TimelineComponentModule } from 'src/app/sharedcomponents/verticaltimeline/vertical_timeline_module';

const routes: Routes = [
    {
        path: '',
        component: AboutMePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutMeRoutingModule { }

@NgModule({
    declarations: [
        AboutMePage,
    ],
    imports: [
        CommonModule,
        TimelineComponentModule,
        MatTabsModule,
        AboutMeRoutingModule,
        MatCardModule,
    ],
    exports: [AboutMePage],
})
export class AboutMePageModule { }
