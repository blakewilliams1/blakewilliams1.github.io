import {
  Router
} from "./chunk-CKPOOHRL.js";
import "./chunk-PA6WMTJB.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-5XZIGUF2.js";
import "./chunk-EVGW7CXF.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-CB56ZIDH.js";

// src/app/travels/road_to_ushuaia/road_to_ushuaia_page.ts
var RoadToUshuaiaPage = class _RoadToUshuaiaPage {
  constructor(router) {
    this.router = router;
    setTimeout(() => {
      setTimeout(() => {
        router.navigate(["/travels"]);
      }, 100);
      window.open("https://advrider.com/f/threads/california-to-ushuaia-2024.1750647/page-1000", "_blank", "noopener,noreferrer");
    }, 2e3);
  }
  static {
    this.\u0275fac = function RoadToUshuaiaPage_Factory(t) {
      return new (t || _RoadToUshuaiaPage)(\u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoadToUshuaiaPage, selectors: [["road-to-ushuaia-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[2, "text-align", "center"], [1, "divider"]], template: function RoadToUshuaiaPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-card")(1, "h1", 0);
        \u0275\u0275text(2, "The Road to Ushuaia");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 1);
        \u0275\u0275elementStart(4, "p");
        \u0275\u0275text(5, " Redirecting to my thread on Advrider.com... ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " If you'd like to reach me direct, text me on Whatsapp! ");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [MatCardModule, MatCard], styles: ["\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  margin: 1em 0;\n  max-width: 100%;\n}\n#pleaseHold[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n.divider[_ngcontent-%COMP%] {\n  border-top: 1px solid white;\n  margin-bottom: 1em;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin: 20px 5%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoadToUshuaiaPage, { className: "RoadToUshuaiaPage", filePath: "src\\app\\travels\\road_to_ushuaia\\road_to_ushuaia_page.ts", lineNumber: 14 });
})();
export {
  RoadToUshuaiaPage
};
