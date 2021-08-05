import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProjectsPage } from "./projects_page";
import {MatIconModule} from '@angular/material/icon';

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
        MatIconModule,
        MatCardModule,
        CommonModule,
        MatTabsModule,
        ProjectsPageRoutingModule,
    ],
    exports: [ProjectsPage],
})
export class ProjectsPageModule { }
