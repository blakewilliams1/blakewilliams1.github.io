import{Fa as f,La as o,Xb as w,Yb as y,_a as h,_b as v,ab as l,fb as a,ga as d,gb as i,hb as c,mb as u,ub as r,vb as g,xb as p}from"./chunk-NEKH66XV.js";function C(e,m){e&1&&c(0,"div",8)}function k(e,m){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"span"),r(3),i(),a(4,"div",3),c(5,"div",4),h(6,C,1,0,"div",5),i()(),a(7,"div",6)(8,"h2"),r(9),i(),c(10,"span",7),i()()),e&2){let n=m.$implicit,t=m.index,s=u();o(3),g(s.calculateTimelineDate(n.date)),o(3),l("ngIf",t!=s.timelineEvents.length-1),o(3),g(n.title),o(),l("innerHtml",n.content,f)}}var b=(()=>{class e{constructor(){this.timelineEvents=[]}calculateTimelineDate(n){return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}).format(n)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["timeline"]],inputs:{timelineEvents:"timelineEvents"},standalone:!0,features:[p],decls:1,vars:1,consts:[["class","timeline-block",4,"ngFor","ngForOf"],[1,"timeline-block"],[1,"timeline-bar-container"],[1,"timeline-bar"],[1,"timeline-node"],["class","timeline-line",4,"ngIf"],[1,"timeline-content"],[3,"innerHtml"],[1,"timeline-line"]],template:function(t,s){t&1&&h(0,k,11,4,"div",0),t&2&&l("ngForOf",s.timelineEvents)},dependencies:[v,w,y],styles:[".timeline-block[_ngcontent-%COMP%], .timeline-bar-container[_ngcontent-%COMP%]{display:flex}.timeline-bar-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:80px;text-align:right;padding:6px 10px 0 0}.timeline-bar[_ngcontent-%COMP%]{display:inline-block}.timeline-node[_ngcontent-%COMP%]{border:3px solid grey}.timeline-line[_ngcontent-%COMP%]{border:2px solid grey;height:calc(100% - 33px);margin:auto;min-height:30px;width:0}.timeline-node[_ngcontent-%COMP%]{border-radius:18px;border-color:gray;height:25px;width:25px}.timeline-content[_ngcontent-%COMP%]{padding:0 20px 20px;flex-grow:1}.timeline-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d3d3d3}h2[_ngcontent-%COMP%]{margin-top:0}"]})}}return e})();var P=(()=>{class e{constructor(){this.projectTimeline=[{date:new Date(16781652e5),title:"Senior Engineer",content:`<p>Still at Google, I was promoted to L5 for my contributions to the AV/VR efforts
        I'm part of. This is the crossover point at which you are considered a Senior Engineer.</p>`},{date:new Date(162526578e4),title:"AR/VR work (Google)",content:`<p>Finally within the realm of what I consider to be a dream job, I'm now working
        on things involving the AR/VR tech space. The work involves platform and level support for
        experimental AR glasses.
        <a href="https://youtu.be/lj0bFX9HXeE?t=25s">Here is a direct example of the hardware worked on</a>.</p>
        <p>One of the greatest challenges is creating a device capable of all-day use while
        providing non-trivial and power-intensive functionality. Because there is a hard limit on
        the weight of eyeglasses people are willing to wear all day, consequently hard limits exist
        on maximum possible battery capacity + draw, SoC options, etc\u2026 Additionally, introducing
        new frameworks and libraries to the public creates higher friction to adoption of the
        technology than leveraging ones that already exist and are widely available. Much of the
        specific challenges my team and I faced lie at the intersection of these ideas; immensely
        optimizing performance to support a still-emerging new class of hardware product with
        massive physical constraints not present in headsets, while simultaneously supporting known
        frameworks which application developers can leverage to create the experiences that make the
        hardware worth buying.</p>`},{date:new Date(158068338e4),title:"Play Movies/TV (Google)",content:`<p>After 2 long years of working on the Maps project, I left the team for the next
        opportunity at the company. I joined the Movies and TV division of Google Play to do a very
        similar subject of work but with a new goal. Similar to the work done for Maps where there
        was a special area dedicated to technical people to upload data to Google (the transit data)
        that improved the product, Google Play has a special section dedicated to movie studios to
        upload movies, TV shows, and other assets for them.</p>
        <p>For example, someone at Warner Bros could potentially log in to upload The Joker when it
        came out, or come back a few weeks later to upload a revised Spanish subtitle track for the
        movie as well.</p>`},{date:new Date(151761138e4),title:"Transit Partners (Google)",content:`<p>After a little over a year of learning the ropes out of school and contributing,
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
            storage layers intact) and had the help of 3 other engineers to do it.</p>`},{date:new Date(147544818e4),title:"Joining Google",content:`After graduating from UC Santa Cruz, I accepted an offer from Google as an engineer,
        to which I started work as a full stack web developer. Work in the video games industry on a
        game I'm passionate about is still something I consider to be a dream job, but based on the
        games industry standards with compensation, work-life balance, project management crunching,
        and uncertain employment, I opted to look for work beyond just game development.`},{date:new Date(146490738e4),title:"Graduating UC Santa Cruz",content:`After 4 years, I graduated from UC Santa Cruz with a degree in "Computer Science
        with Emphasis in Game Design" which is a fancy way of saying CS degree where all my upper
        division classes were geared towards someone expecting to joining specifically the video games
        industry after schooling.`}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["career-page"]],standalone:!0,features:[p],decls:6,vars:1,consts:[["href","/contact"],[3,"timelineEvents"]],template:function(t,s){t&1&&(a(0,"h4"),r(1,"Feel free to "),a(2,"a",0),r(3,"contact me"),i(),r(4," if you'd like to get in touch!"),i(),c(5,"timeline",1)),t&2&&(o(5),l("timelineEvents",s.projectTimeline))},dependencies:[b],styles:["timeline[_ngcontent-%COMP%]{display:block;margin:20px 5%}h4[_ngcontent-%COMP%]{text-align:center}"]})}}return e})();export{P as CareerPage};
