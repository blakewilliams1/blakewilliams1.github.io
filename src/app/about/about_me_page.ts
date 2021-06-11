import { Component } from '@angular/core';
import { TimelineEvent } from 'src/app/sharedcomponents/verticaltimeline/vertical_timeline';

@Component({
    selector: 'about-me-page',
    templateUrl: './about_me_page.html',
})
export class AboutMePage {

    projectTimeline: TimelineEvent[] = [
   ];

}
