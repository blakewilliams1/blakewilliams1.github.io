import { NgModule } from '@angular/core';
import { BurningMan2023Page } from "./burning_man_2023_page";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImageResizerDirectiveModule } from 'src/app/sharedcomponents/imageresizerdirective/image_resizer_directive_module';

const routes: Routes = [
    {
        path: '',
        component: BurningMan2023Page
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BurningMan2023PageRoutingModule { }

@NgModule({
    declarations: [
      BurningMan2023Page,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        BurningMan2023PageRoutingModule,
        ImageResizerDirectiveModule,
        MatCardModule,
    ],
    exports: [BurningMan2023Page],
})
export class BurningMan2023PageModule { }
