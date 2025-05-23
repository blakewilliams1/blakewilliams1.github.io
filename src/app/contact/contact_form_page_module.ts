import { NgModule } from '@angular/core';
import { ContactFormPage } from "./contact_form_page";
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ContactFormPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactFormPageRoutingModule { }

@NgModule({
    declarations: [
      ContactFormPage,
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        ContactFormPageRoutingModule,
        MatCardModule,
    ],
    exports: [ContactFormPage],
})
export class ContactFormPageModule { }
