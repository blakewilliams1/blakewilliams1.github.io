import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './vertical_timeline';

@NgModule({
    declarations: [
        TimelineComponent,
    ],
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [TimelineComponent],
})
export class TimelineComponentModule { }
