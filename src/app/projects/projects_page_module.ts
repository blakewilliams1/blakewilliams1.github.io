import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsPage } from "./projects_page";

const routes: Routes = [
    {
        path: '',
        component: ProjectsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsPageRoutingModule { }

@NgModule({
    declarations: [
        ProjectsPage,
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        ProjectsPageRoutingModule,
    ],
    exports: [ProjectsPage],
})
export class ProjectsPageModule { }
