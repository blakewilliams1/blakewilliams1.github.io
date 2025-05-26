import {
  MatCardModule
} from "./chunk-5XZIGUF2.js";
import "./chunk-EVGW7CXF.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CB56ZIDH.js";

// src/app/sharedcomponents/verticaltimeline/vertical_timeline.ts
function TimelineComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function TimelineComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275element(5, "div", 4);
    \u0275\u0275template(6, TimelineComponent_div_0_div_6_Template, 1, 0, "div", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "span", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const timelineEvent_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.calculateTimelineDate(timelineEvent_r1.date));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", i_r2 != ctx_r2.timelineEvents.length - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(timelineEvent_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("innerHtml", timelineEvent_r1.content, \u0275\u0275sanitizeHtml);
  }
}
var TimelineComponent = class _TimelineComponent {
  constructor() {
    this.timelineEvents = [];
  }
  calculateTimelineDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long"
    }).format(date);
  }
  static {
    this.\u0275fac = function TimelineComponent_Factory(t) {
      return new (t || _TimelineComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["timeline"]], inputs: { timelineEvents: "timelineEvents" }, decls: 1, vars: 1, consts: [["class", "timeline-block", 4, "ngFor", "ngForOf"], [1, "timeline-block"], [1, "timeline-bar-container"], [1, "timeline-bar"], [1, "timeline-node"], ["class", "timeline-line", 4, "ngIf"], [1, "timeline-content"], [3, "innerHtml"], [1, "timeline-line"]], template: function TimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TimelineComponent_div_0_Template, 11, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.timelineEvents);
      }
    }, dependencies: [NgForOf, NgIf], styles: ["\n\n.timeline-block[_ngcontent-%COMP%] {\n  display: flex;\n}\n.timeline-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.timeline-bar-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 80px;\n  text-align: right;\n  padding: 6px 10px 0 0;\n}\n.timeline-bar[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.timeline-node[_ngcontent-%COMP%] {\n  border: 3px solid grey;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  border: 2px solid grey;\n  height: calc(100% - 33px);\n  margin: auto;\n  min-height: 30px;\n  width: 0;\n}\n.timeline-node[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border-color: gray;\n  height: 25px;\n  width: 25px;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  flex-grow: 1;\n}\n.timeline-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: lightgrey;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src\\app\\sharedcomponents\\verticaltimeline\\vertical_timeline.ts", lineNumber: 9 });
})();

// src/app/sharedcomponents/verticaltimeline/vertical_timeline_module.ts
var TimelineComponentModule = class _TimelineComponentModule {
  static {
    this.\u0275fac = function TimelineComponentModule_Factory(t) {
      return new (t || _TimelineComponentModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TimelineComponentModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      MatCardModule
    ] });
  }
};

// src/app/career/career_page.ts
var CareerPage = class _CareerPage {
  constructor() {
    this.projectTimeline = [
      {
        date: /* @__PURE__ */ new Date(16781652e5),
        title: "Senior Engineer",
        content: `<p>Still at Google, I was promoted to L5 for my contributions to the AV/VR efforts
        I'm part of. This is the crossover point at which you are considered a Senior Engineer.</p>`
      },
      {
        date: /* @__PURE__ */ new Date(162526578e4),
        title: "AR/VR work (Google)",
        content: `<p>Finally within the realm of what I consider to be a dream job, I'm now working
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
        hardware worth buying.</p>`
      },
      {
        date: /* @__PURE__ */ new Date(158068338e4),
        title: "Play Movies/TV (Google)",
        content: `<p>After 2 long years of working on the Maps project, I left the team for the next
        opportunity at the company. I joined the Movies and TV division of Google Play to do a very
        similar subject of work but with a new goal. Similar to the work done for Maps where there
        was a special area dedicated to technical people to upload data to Google (the transit data)
        that improved the product, Google Play has a special section dedicated to movie studios to
        upload movies, TV shows, and other assets for them.</p>
        <p>For example, someone at Warner Bros could potentially log in to upload The Joker when it
        came out, or come back a few weeks later to upload a revised Spanish subtitle track for the
        movie as well.</p>`
      },
      {
        date: /* @__PURE__ */ new Date(151761138e4),
        title: "Transit Partners (Google)",
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
            storage layers intact) and had the help of 3 other engineers to do it.</p>`
      },
      {
        date: /* @__PURE__ */ new Date(147544818e4),
        title: "Joining Google",
        content: `After graduating from UC Santa Cruz, I accepted an offer from Google as an engineer,
        to which I started work as a full stack web developer. Work in the video games industry on a
        game I'm passionate about is still something I consider to be a dream job, but based on the
        games industry standards with compensation, work-life balance, project management crunching,
        and uncertain employment, I opted to look for work beyond just game development.`
      },
      {
        date: /* @__PURE__ */ new Date(146490738e4),
        title: "Graduating UC Santa Cruz",
        content: `After 4 years, I graduated from UC Santa Cruz with a degree in "Computer Science
        with Emphasis in Game Design" which is a fancy way of saying CS degree where all my upper
        division classes were geared towards someone expecting to joining specifically the video games
        industry after schooling.`
      }
    ];
  }
  static {
    this.\u0275fac = function CareerPage_Factory(t) {
      return new (t || _CareerPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CareerPage, selectors: [["career-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["href", "/contact"], [3, "timelineEvents"]], template: function CareerPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h3");
        \u0275\u0275text(1, "Feel free to ");
        \u0275\u0275elementStart(2, "a", 0);
        \u0275\u0275text(3, "contact me");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, " if you'd like to get in touch!");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "timeline", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275property("timelineEvents", ctx.projectTimeline);
      }
    }, dependencies: [TimelineComponentModule, TimelineComponent], styles: ["\n\ntimeline[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px 5%;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CareerPage, { className: "CareerPage", filePath: "src\\app\\career\\career_page.ts", lineNumber: 12 });
})();
export {
  CareerPage
};
