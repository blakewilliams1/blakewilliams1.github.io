import {
  Title
} from "./chunk-PA6WMTJB.js";
import {
  ImageResizerDirective,
  ImageResizerDirectiveModule
} from "./chunk-35MYT5BR.js";
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
  ɵɵtext,
  ɵɵtrustConstantResourceUrl
} from "./chunk-CB56ZIDH.js";

// src/app/qr/aboutqr/about_qr_page.ts
var AboutQrPage = class _AboutQrPage {
  constructor(titleService) {
    this.titleService = titleService;
    this.titleService.setTitle("About QR Tattoo");
  }
  static {
    this.\u0275fac = function AboutQrPage_Factory(t) {
      return new (t || _AboutQrPage)(\u0275\u0275directiveInject(Title));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutQrPage, selectors: [["about-qr-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 0, consts: [[1, "page-container"], ["imgurId", "r9Nmh7d"], ["loading", "lazy", "src", \u0275\u0275trustConstantResourceUrl`https://www.youtube.com/embed/BxV14h0kFs0`, "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["href", "https://i.imgur.com/JY7AY3n.jpeg", "target", "_blank"]], template: function AboutQrPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-card")(2, "h1");
        \u0275\u0275text(3, "About the QR Tattoo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "img", 1);
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, " This is a tattoo of a QR code that links to qrtatt.ooo. I 'own' this domain, and have it pointed at a reserved landing page on my personal website - blakewilliams.org - which is hosted on GitHub Pages. Unlike a vast majority of QR codes that will direct you to some fixed URL, this code is 'dynamic'. This means that I can change it's functionality as I please. I created a custom android app that for this! On my phone I select from a pre-set list of abilities I've written accounted for, then behind the scenes I call Github's REST API to commit the changes to a JSON file stored on GitHub. For example, the landing page can redirect to any other URL of my choosing, prompt a download for a VCF contact file, open a chat with me on whatsapp/telegram/twitter/etc... and many more. The QR code landing page reads the config file and then determines what info to show or where to redirect users to from there. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "ul")(8, "li")(9, "h2");
        \u0275\u0275text(10, "There are a bunch of websites that offer 'dynamic' QR codes, how is this different?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div");
        \u0275\u0275text(12, " Technically it's not; it's the same core offering you may see from sites like Scanova, but the key here is that I control the whole process. I don't have to wonder if Scanova or equivalent will be around in X decades from now. I have the domain and can build/link to my web projects as I please. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "li")(14, "h2");
        \u0275\u0275text(15, "What if you loose the domain?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div");
        \u0275\u0275text(17, " While nobody (not even large companies) can outright own a domain indefinitely, you can lease them for up to 10 years at a time from ICANN. Mine is good till at least 2030, and I have auto-renew payment set up so I don\\'t expect lapses in URL ownership. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "li")(19, "h2");
        \u0275\u0275text(20, "Why not just have a business card or keychain of it? Why does it need to be a tattoo?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div");
        \u0275\u0275text(22, " Right, it doesn't need to be a tattoo. Nothing in this project is wholly new or innovative; I recognize that it's about as much effort for a user to scan my arm as it is to just give the info verbally or by typing it into their phone. It's just more novel. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li")(24, "h2");
        \u0275\u0275text(25, "What if GitHub stops support for their API?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div");
        \u0275\u0275text(27, " Then I'll just keep the config elsewhere on the internet that does allow for APIs to modify repos. :) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li")(29, "h2");
        \u0275\u0275text(30, "What if GitHub stops allowing users to host their personal websites with GH Pages?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div");
        \u0275\u0275text(32, " Then I\\'ll just host my site on another platform or pay for server space. There will ALWAYS be website hosting services as long as the internet continues to exist. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "li")(34, "h2");
        \u0275\u0275text(35, "APIs change, services migrate, technology moves on changes. What if one day it stops working?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div");
        \u0275\u0275text(37, " Similar to the previous questions, I\\'ll just update my code and serving methods. Nothing is forever and yes like everything else on the internet it does occasionally require some maintenance to stay running. ");
        \u0275\u0275element(38, "iframe", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li")(40, "h2");
        \u0275\u0275text(41, "What if the tattoo blurs or fades?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div");
        \u0275\u0275text(43, " I'm purposefully getting the tattoo slightly under-inked to anticipate this. ");
        \u0275\u0275elementStart(44, "a", 3);
        \u0275\u0275text(45, "Here is an example of a tattoo from someone else that still works but is showing ink bleeding");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, ". Also if the fade still gets too bad several decades down the road, laser removal can re-sharpen the edges. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "li")(48, "h2");
        \u0275\u0275text(49, "What if your skin gets wrinkly as you age?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div");
        \u0275\u0275text(51, " Then I'll probably need to stretch it taut to get good reading, or maybe it just eventually will cease to work; what do you expect? I'm not going to NOT get a tattoo now because of how my skin's tightness may or may not be in my final couple decades. For all tattoos, there's still a massive amount of enjoyment people get from them even if the canvas degrades eventually. ");
        \u0275\u0275elementEnd()()()()();
      }
    }, dependencies: [MatCardModule, MatCard, ImageResizerDirectiveModule, ImageResizerDirective], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: fit-content;\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin: 20px 5%;\n  max-width: 1000px;\n}\nimg[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  width: 100%;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n}\nli[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\niframe[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  margin-top: 16px;\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutQrPage, { className: "AboutQrPage", filePath: "src\\app\\qr\\aboutqr\\about_qr_page.ts", lineNumber: 16 });
})();
export {
  AboutQrPage
};
