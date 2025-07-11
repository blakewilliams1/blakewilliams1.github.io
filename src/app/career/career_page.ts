import { Component } from '@angular/core';
import { TimelineComponent, TimelineEvent } from '../sharedcomponents/verticaltimeline/vertical_timeline';

@Component({
    selector: 'career-page',
    templateUrl: './career_page.html',
    styleUrls: ['./career_page.scss'],
    standalone: true,
    imports: [TimelineComponent],
})
export class CareerPage {
    projectTimeline: TimelineEvent[] = [
    {
        date: new Date(1678165200000),
        title: 'Senior Engineer',
        content: `<p>Still at Google, I was promoted to L5 for my contributions to the AV/VR efforts
        I'm part of. This is the crossover point at which you are considered a Senior Engineer.</p>`,
    },{
        date: new Date(1625265780000),
        title: 'AR/VR work (Google)',
        content: `<p>Finally within the realm of what I consider to be a dream job, I'm now working
        on things involving the AR/VR tech space. The work involves platform and level support for
        experimental AR glasses.
        <a href="https://youtu.be/lj0bFX9HXeE?t=25s" target="_blank">Here is a direct example of the
        hardware worked on</a>.</p>
        <p>One of the greatest challenges is creating a device capable of all-day use while
        providing non-trivial and power-intensive functionality. Because there is a hard limit on
        the weight of eyeglasses people are willing to wear all day, consequently hard limits exist
        on maximum possible battery capacity + draw, SoC options, etc… Additionally, introducing
        new frameworks and libraries to the public creates higher friction to adoption of the
        technology than leveraging ones that already exist and are widely available. Much of the
        specific challenges my team and I faced lie at the intersection of these ideas; immensely
        optimizing performance to support a still-emerging new class of hardware product with
        massive physical constraints not present in headsets, while simultaneously supporting known
        frameworks which application developers can leverage to create the experiences that make the
        hardware worth buying.</p>`,
    },{
        date: new Date(1580683380000),
        title: 'Play Movies/TV (Google)',
        content: `<p>After 2 long years of working on the Maps project, I left the team for the next
        opportunity at the company. I joined the Movies and TV division of Google Play to do a very
        similar subject of work but with a new goal. Similar to the work done for Maps where there
        was a special area dedicated to technical people to upload data to Google (the transit data)
        that improved the product, Google Play has a special section dedicated to movie studios to
        upload movies, TV shows, and other assets for them.</p>
        <p>For example, someone at Warner Bros could potentially log in to upload The Joker when it
        came out, or come back a few weeks later to upload a revised Spanish subtitle track for the
        movie as well.</p>`,
    },{
        date: new Date(1517611380000),
        title: 'Transit Partners (Google)',
        content: `<p>After a little over a year of learning the ropes out of school and contributing,
        I got my first project to lead, and it was called Transit Partners. It was a special section
        of Google Maps accessible only for transit operators, AKA the people who determine the routes
        and timetables of any given cities public transit system. Through this portal I was in charge
        of, they upload data to Google about GPS locations of where their busses stop, timetables of
        when that happen, info about road closures for construction/events, etc... This is done for
        <b>ALL</b> forms of public transportation from buses to trains to subways and everything in
        between. <b>Nearly 100% of all public transit data flows through this tool for use by
        Maps route calculation engines</b></p>
        <p>Although this tool already existed when I started on the project, it had organically grown
        since the inception of Google Maps into a 'messy' and non-optimal experience for users. The
        scope, use cases, and features of Maps had drastically changed but this crucial tool was stuck
        in the past. I was responsible with redesigning it from scratch (but keeping existing data
            storage layers intact) and had the help of 3 other engineers to do it.</p>`,
    },{
        date: new Date(1475448180000),
        title: 'Joining Google',
        content: `After graduating from UC Santa Cruz, I accepted an offer from Google as an engineer,
        to which I started work as a full stack web developer. Work in the video games industry on a
        game I'm passionate about is still something I consider to be a dream job, but based on the
        games industry standards with compensation, work-life balance, project management crunching,
        and uncertain employment, I opted to look for work beyond just game development.`,
    },{
        date: new Date(1464907380000),
        title: 'Graduating UC Santa Cruz',
        content: `After 4 years, I graduated from UC Santa Cruz with a degree in "Computer Science
        with Emphasis in Game Design" which is a fancy way of saying CS degree where all my upper
        division classes were geared towards someone expecting to joining specifically the video games
        industry after schooling.`,
    }
];

}
