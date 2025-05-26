import {
  MatCard,
  MatCardModule
} from "./chunk-5XZIGUF2.js";
import "./chunk-EVGW7CXF.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtext
} from "./chunk-CB56ZIDH.js";

// src/app/projects/cssinjection/css_injection_page.ts
var CssInjectionPage = class _CssInjectionPage {
  constructor() {
    this.pornhubCss = `
  /* step fantasy stuff */
  a[title~="step" i],
  a[title~="stepmom" i],
  a[title~="stepdad" i],
  a[title~="stepsis" i],
  a[title~="stepsister" i],
  a[title~="stepbro" i],
  a[title~="stepbrother" i],
  a[title~="stepdaughter" i],
  a[title~="stepcousin" i],
  a[data-title~="step" i],
  a[data-title~="stepmom" i],
  a[data-title~="stepdad" i],
  a[data-title~="stepsis" i],
  a[data-title~="stepsister" i],
  a[data-title~="stepbro" i],
  a[data-title~="stepbrother" i],
  a[data-title~="stepdaughter" i],
  a[data-title~="stepcousin" i] {
    visibility: hidden;
  }
  `;
    this.spanishDictCss = `
  /* Limited page view popup. */
  .ReactModalPortal {
    visibility: hidden;
  }
  `;
    this.twitterCss = `
  article:has([data-testid="socialContext"]) {
    display: none;
  }
  `;
    this.youtubeCss = `
  ytd-emergency-onebox-renderer {
    display: none;
  }
  
  /* Rows of youtube shorts on the search page */
  ytd-reel-shelf-renderer {
    display: none !important;
  }
  
  /* Rows of youtube shorts on the home page */
  div#dismissible:has(span#title) {
    display: none;
  }
  
  /* Misc bullshit messaging */
  .ytd-statement-banner-renderer {
      display: none;
  }
  `;
  }
  static {
    this.\u0275fac = function CssInjectionPage_Factory(t) {
      return new (t || _CssInjectionPage)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CssInjectionPage, selectors: [["css-injections-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 4, consts: [[2, "text-align", "center"], [1, "divider"], [1, "disclaimer"], ["href", "https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld", "target", "_blank"], ["href", "https://blog.logrocket.com/product-management/why-youtube-created-shorts/"], [1, "code-container"], [3, "innerHTML"], ["href", "https://developer.mozilla.org/en-US/docs/Web/CSS/:has", "target", "_blank"]], template: function CssInjectionPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card")(1, "h1", 0);
        \u0275\u0275text(2, "CSS Injection");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "DISCLAIMER: I do not own the chrome extension, know it's developer, or have been paid to endorse it. My thoughts are my own.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, ` While ad blockers can make browsing the web a significantly different experience than without, there is still a lot of content that I don't like seeing online. Not that there is anything inherently wrong with the things I don't enjoy viewing, it's just my personal preferences. I thought "gee, wouldn't it be great if there was a Chrome extension that could inject custom CSS rules you create into websites of your choosing to hide things you don't want to see?" Sure enough, there are several extensions made to do just that! I tried a few and found one that works well and has a nice UI. `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p")(9, "a", 3);
        \u0275\u0275text(10, " User JavaScript and CSS ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " is a great extension that I've been using to great effect. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. Here are a few of my favorite custom CSS rules I've created for myself to make browsing certain websites more enjoyable. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h1");
        \u0275\u0275text(13, "Youtube.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "I really don't like Youtube Shorts, and the site force-feeds you them constantly. There is no way to disable Shorts as ");
        \u0275\u0275elementStart(16, "a", 4);
        \u0275\u0275text(17, "the company seems pressured to compete with Tiktok.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " I don't think it encourages healthy, intentional, or mindful viewing and it feels more like brainrot when you viewing Shorts, as if the Tiktok content model is something to aspire to copy. These injections will hide them from your view.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "pre", 5);
        \u0275\u0275element(20, "code", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "h1");
        \u0275\u0275text(22, "Twitter.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "I don't want to see what the people I follow like and retweet. I want to see ");
        \u0275\u0275elementStart(25, "i");
        \u0275\u0275text(26, "their");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " content!! Most of the retweets and likes from other people I see tend to be political, hot takes, or tiktok reposts. I don't miss this spam for the most part.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "pre", 5);
        \u0275\u0275element(29, "code", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h1");
        \u0275\u0275text(31, "Pornhub.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "I'm not a fan of 'step fantasy' porn, where the actors pretend to be related. I really don't get this taboo appeal, but it's all over the platform. Sure you can set a Taste Profile if you have even a free account, but this only blocks categorical content on the My Recommendations page. Taste Profile doesn't apply when using the site in any other way than that.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "pre", 5);
        \u0275\u0275element(35, "code", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h1");
        \u0275\u0275text(37, "Spanishdict.com");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "This is a great website for viewing verb conjugations if you're learning spanish. This removes a modal that blocks the screen on page load");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "pre", 5);
        \u0275\u0275element(41, "code", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "h1");
        \u0275\u0275text(43, "Shortcomings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, "This (and any CSS injector) is not without it's shortcomings. There are some things that it can struggle with such as:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ul")(47, "li")(48, "b");
        \u0275\u0275text(49, "High barrier to entry:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " The percent of people who know how to write CSS selectors is relatively small, all things considered. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li")(52, "b");
        \u0275\u0275text(53, "Easily broken when a website remodels:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " If a website overhauls itself, there is a good chance your selectors will break. These little 'hacks' usually are very dependent on the current iteration of the website's UI. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "li")(56, "b");
        \u0275\u0275text(57, "Difficult to create well:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " Inspecting the DOM of most big name websites reveal a lot of generated elements, random class names, and general obfuscation/minification. You rarely ever get so lucky as to find a <div> with a human readable and obvious class name. I think the ");
        \u0275\u0275elementStart(59, "a", 7);
        \u0275\u0275text(60, ":has selector");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " will significantly help with this once it lands (assuming it's reasonably performant). ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275property("innerHTML", ctx.youtubeCss, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(9);
        \u0275\u0275property("innerHTML", ctx.twitterCss, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", ctx.pornhubCss, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(6);
        \u0275\u0275property("innerHTML", ctx.spanishDictCss, \u0275\u0275sanitizeHtml);
      }
    }, dependencies: [MatCardModule, MatCard], styles: ["\n\nmat-card[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%] {\n  margin: 20px 5%;\n}\nmat-card-title[_ngcontent-%COMP%] {\n  margin-top: 20px !important;\n}\n.disclaimer[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 1.1rem;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid white;\n  margin-bottom: 1em;\n}\n.code-container[_ngcontent-%COMP%] {\n  max-width: fit-content;\n  overflow-x: auto;\n  width: auto;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\npre[_ngcontent-%COMP%] {\n  background: #303030;\n  border-radius: 8px;\n  padding-right: 16px;\n  width: fit-content;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CssInjectionPage, { className: "CssInjectionPage", filePath: "src\\app\\projects\\cssinjection\\css_injection_page.ts", lineNumber: 13 });
})();
export {
  CssInjectionPage
};
