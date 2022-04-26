import { NgModule } from '@angular/core';
import { CssInjectionPage } from "./css_injection_page";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CssInjectionPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CssInjectionPageRoutingModule { }

@NgModule({
    declarations: [
      CssInjectionPage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        CssInjectionPageRoutingModule,
        MatCardModule,
    ],
    exports: [CssInjectionPage],
})
export class CssInjectionPageModule { }
