import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'timeline',
    templateUrl: './vertical_timeline.html',
    styleUrls: ['./vertical_timeline.scss']
})
export class TimelineComponent {

    @Input()
    timelineEvents: TimelineEvent[] = [];

    calculateTimelineDate(date: Date): string {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
        }).format(date);
    }
}

export interface TimelineEvent {
    date: Date;
    title: string;
    content: SafeHtml;
}