import { NgModule } from '@angular/core';
import { RoadToUshuaiaPage } from "./road_to_ushuaia_page";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: RoadToUshuaiaPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoadToUshuaiaPageRoutingModule { }

@NgModule({
    declarations: [
      RoadToUshuaiaPage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        RoadToUshuaiaPageRoutingModule,
        MatCardModule,
    ],
    exports: [RoadToUshuaiaPage],
})
export class RoadToUshuaiaPageModule { }
