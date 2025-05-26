import {
  ElementRef,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵlistener,
  ɵɵresolveWindow
} from "./chunk-CB56ZIDH.js";

// src/app/sharedcomponents/imageresizerdirective/image_resizer_directive.ts
var ImageResizerDirective = class _ImageResizerDirective {
  constructor(element) {
    this.element = element;
    this.imgurId = "";
    this.isLandscape = false;
    this.imgurUrlPattern = "https://imgur.com/";
    this.imageSizesToImgurSuffixArray = [
      {
        width: 320,
        suffix: "m"
      },
      {
        width: 640,
        suffix: "l"
      },
      {
        width: 1024,
        suffix: "h"
      }
    ];
    this.lastCalculatedSuffix = void 0;
    this.lastCalculatedWidth = 0;
    this.el = element;
  }
  ngOnInit() {
    this.calculateSrcAttribute();
  }
  // Recalculate the needed suffix for the imgur images, then apply the change if it's different than before.
  onResize(event) {
    this.calculateSrcAttribute();
  }
  calculateSrcAttribute() {
    let renderedWidth = this.el.nativeElement.width;
    if (this.isLandscape) {
      renderedWidth = renderedWidth * 16 / 9;
    }
    if (renderedWidth < this.lastCalculatedWidth) {
      return;
    }
    const chosenSuffix = this.chooseSuffix(renderedWidth);
    if (this.lastCalculatedSuffix != void 0 && chosenSuffix == this.lastCalculatedSuffix) {
      return;
    }
    this.lastCalculatedSuffix = chosenSuffix;
    this.lastCalculatedWidth = renderedWidth;
    const imgurUrl = `${this.imgurUrlPattern}${this.imgurId}${chosenSuffix}.jpg`;
    this.el.nativeElement.setAttribute("src", imgurUrl);
  }
  chooseSuffix(renderedWidth) {
    for (let pairing of this.imageSizesToImgurSuffixArray) {
      if (renderedWidth > pairing.width) {
        continue;
      }
      return pairing.suffix;
    }
    return "";
  }
  static {
    this.\u0275fac = function ImageResizerDirective_Factory(t) {
      return new (t || _ImageResizerDirective)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ImageResizerDirective, selectors: [["", "imgurId", ""]], hostBindings: function ImageResizerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("resize", function ImageResizerDirective_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { imgurId: "imgurId", isLandscape: "isLandscape" } });
  }
};

// src/app/sharedcomponents/imageresizerdirective/image_resizer_directive_module.ts
var ImageResizerDirectiveModule = class _ImageResizerDirectiveModule {
  static {
    this.\u0275fac = function ImageResizerDirectiveModule_Factory(t) {
      return new (t || _ImageResizerDirectiveModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ImageResizerDirectiveModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};

export {
  ImageResizerDirective,
  ImageResizerDirectiveModule
};
