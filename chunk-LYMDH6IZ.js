import {
  Router
} from "./chunk-CKPOOHRL.js";
import "./chunk-PA6WMTJB.js";
import {
  MatCardModule
} from "./chunk-5XZIGUF2.js";
import "./chunk-EVGW7CXF.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-CB56ZIDH.js";

// src/app/sharedcomponents/konamicodeservice/konami_code_service.ts
var KonamiCodeService = class _KonamiCodeService {
  constructor() {
    this.KONAMI_CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
    this.inputHistory = [];
    this.keyboardListener = (event) => {
      this.checkForCode(event);
    };
  }
  registerListener() {
  }
  checkForCode(event) {
    this.inputHistory.push(event.code);
    if (this.inputHistory.length > 10) {
      this.inputHistory.shift();
    }
    if (this.inputHistory.toString() == this.KONAMI_CODE.toString()) {
      this.inputHistory = [];
      alert("(\u202F\u{1F441}\uFE0F\u202F\u035C\u0296\u202F\u{1F441}\uFE0F\u202F) you found the secret");
    }
  }
  static {
    this.\u0275fac = function KonamiCodeService_Factory(t) {
      return new (t || _KonamiCodeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KonamiCodeService, factory: _KonamiCodeService.\u0275fac, providedIn: "root" });
  }
};

// src/app/homepage/home_page.ts
function HomePage_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275element(7, "span", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(skill_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSkillDescriptor(skill_r1.percent));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", skill_r1.percent, "%");
  }
}
var HomePage = class _HomePage {
  // Gets a descriptive word to match the skill percentage.
  getSkillDescriptor(percent) {
    if (percent >= 95) {
      return "Master";
    } else if (percent >= 80) {
      return "Advanced";
    } else if (percent >= 60) {
      return "Proficient";
    } else if (percent >= 40) {
      return "Competent";
    } else if (percent >= 20) {
      return "Novice";
    } else {
      return "Beginner";
    }
  }
  constructor(router, konamiService) {
    this.router = router;
    this.konamiService = konamiService;
    this.languageSkills = [
      { label: "Java", percent: 90 },
      { label: "Typescript", percent: 80 },
      { label: "Javascript", percent: 80 },
      { label: "C++", percent: 70 },
      { label: "Kotlin", percent: 40 },
      { label: "Dart", percent: 30 }
    ];
  }
  ngAfterViewInit() {
    console.log("(\u0361 \u0361\xB0 \u035C \u3064 \u0361\u0361\xB0) nosey now, aren't we?");
    this.konamiService.registerListener();
  }
  static {
    this.\u0275fac = function HomePage_Factory(t) {
      return new (t || _HomePage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(KonamiCodeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["home-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 1, consts: [[1, "home-body"], ["src", "https://avatars.githubusercontent.com/u/10764966?s=400&u=a47f46f895511422da7236d0d694dee14ac122cf&v=4", "alt", "A side profile image of Blake Williams, showing off a mohawk hair style"], [1, "sub-title"], ["href", "https://linkedin.com/in/blauwill", "target", "_blank"], ["href", "/contact"], [1, "language-skill-container"], ["class", "language-skill", 4, "ngFor", "ngForOf"], [1, "language-skill"], [1, "skill-label-container"], [1, "progress-bar"], [1, "progress-bar-fill", "red-yellow-gradient"]], template: function HomePage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275elementStart(2, "p", 2);
        \u0275\u0275text(3, "Hi, my name's Blake Williams");
        \u0275\u0275element(4, "br");
        \u0275\u0275text(5, "I'm a senior software engineer focused on AR/VR projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "span")(7, "a", 3);
        \u0275\u0275text(8, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, ", ");
        \u0275\u0275elementStart(10, "a", 4);
        \u0275\u0275text(11, "Email");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 5)(13, "p");
        \u0275\u0275text(14, "Language Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275template(15, HomePage_div_15_Template, 8, 4, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.languageSkills);
      }
    }, dependencies: [CommonModule, NgForOf, MatCardModule], styles: ["\n\n.red-yellow-gradient[_ngcontent-%COMP%] {\n  background-image:\n    linear-gradient(\n      to right,\n      #f81d00 0%,\n      #f9d423 100%);\n}\n.home-body[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin: 100px auto;\n}\n.home-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  height: 100px;\n  width: 100px;\n}\n.home-body[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  margin: 50px 20px 12px;\n  text-align: center;\n}\n.language-skill-container[_ngcontent-%COMP%] {\n  margin: 0 20%;\n}\n.language-skill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.language-skill[_ngcontent-%COMP%]   .skill-label-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n}\n.progress-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: gray;\n}\n.progress-bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 5px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src\\app\\homepage\\home_page.ts", lineNumber: 17 });
})();
export {
  HomePage
};
