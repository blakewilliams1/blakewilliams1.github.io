import {
  Router
} from "./chunk-CKPOOHRL.js";
import {
  HttpClient,
  HttpClientModule
} from "./chunk-PA6WMTJB.js";
import {
  CommonModule,
  NgIf,
  isDevMode,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-CB56ZIDH.js";

// src/app/qr/qr_config.json
var qr_config_default = { actionType: "TELEGRAM_ACCOUNT", arModelName: "trex", genericFileName: "test_image.png", paypalRequestAmountUSD: 10, redirectUrl: "example.com", trackerType: "HANDS" };

// src/app/qr/qr_landing_page.ts
function QRLandingPage_p_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Specified file for download not found");
    \u0275\u0275elementEnd();
  }
}
var QRLandingPage = class _QRLandingPage {
  constructor(router, httpClient) {
    this.router = router;
    this.httpClient = httpClient;
    this.showFileNotFoundMessage = false;
    this.showEmergencyInfo = false;
    this.showArViewer = false;
    this.localQrConfig = qr_config_default;
    this.CONFIG_FILE_URL = "https://api.github.com/repos/blakewilliams1/blakewilliams1.github.io/contents/src/app/qr/qr_config.json";
    this.VCARD_FILE_URL = "https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/app/qr/vcard.vcf";
    this.GENERIC_FILE_BASE_URL = "https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/app/qr/generic_files/";
    this.URL_PREFIX = "https://";
    this.FACEBOOK_URL = "https://www.facebook.com/blake.williams.731135";
    this.TELEGRAM_URL = "https://t.me/sladewolf";
    this.WHATSAPP_URL = "https://wa.me/17605606898";
    this.PAYPAL_URL = "https://paypal.me/shadowslade/";
    this.CASH_APP_URL = "https://cash.app.regrettispaghetti";
    this.INSTAGRAM_URL = "https://instagram.com/_sladewolf";
    this.DISCORD_URL = "https://discord.com/users/shadowslade6516";
    this.TWITTER_URL = "https://twitter.com/Shadow_slade/";
    this.BLUESKY_URL = "https://bsky.app/profile/sladewolf.bsky.social";
    this.VENMO_URL = "https://venmo.com/code?user_id=1646046040031232265";
    this.redirectionActions = [
      "TELEGRAM_ACCOUNT",
      "WHATSAPP_ACCOUNT",
      "FACEBOOK_ACCOUNT",
      "TWITTER_ACCOUNT",
      "INSTAGRAM_URL",
      "BLUESKY_ACCOUNT",
      "DISCORD_ACCOUNT",
      "PAYPAL_REQUEST",
      "VENMO_ACCOUNT",
      "CASH_APP_ACCOUNT",
      "ABOUT_TATTOO_PAGE",
      "REDIRECTION_URL"
    ];
    if (isDevMode()) {
      this.executeConfigSettings(this.localQrConfig);
    } else {
      httpClient.get(this.CONFIG_FILE_URL).pipe(map((response) => atob(response.content)), map((content) => JSON.parse(content))).subscribe((content) => {
        this.executeConfigSettings(content);
      });
    }
  }
  executeConfigSettings(qrConfig) {
    if (this.redirectionActions.includes(qrConfig.actionType)) {
      this.handleRedirection(qrConfig);
    } else if (qrConfig.actionType === "VCF_DOWNLOAD") {
      this.httpClient.get(this.VCARD_FILE_URL, { responseType: "blob" }).subscribe((blob) => {
        const fileName = this.VCARD_FILE_URL.substring(this.VCARD_FILE_URL.lastIndexOf("/") + 1);
        this.downloadBlob(blob, fileName);
      });
    } else if (qrConfig.actionType === "GENERIC_FILE_DOWNLOAD") {
      if (!!qrConfig.genericFileName) {
        this.downloadGenericFile(qrConfig.genericFileName);
      } else {
        this.showFileNotFoundMessage = true;
      }
    } else if (qrConfig.actionType === "EMERGENCY_INFO") {
      this.showEmergencyInfo = true;
    }
  }
  downloadGenericFile(fileName) {
    this.httpClient.get(this.GENERIC_FILE_BASE_URL + fileName, { responseType: "blob" }).subscribe((blob) => {
      this.downloadBlob(blob, fileName);
    }, () => {
      this.showFileNotFoundMessage = true;
    });
  }
  // Refactored helper function to download generic files.
  downloadBlob(blob, fileName) {
    const a = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    a.href = objectUrl;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(objectUrl);
  }
  handleRedirection(qrConfig) {
    let computedUrl;
    switch (qrConfig.actionType) {
      case "TELEGRAM_ACCOUNT":
        computedUrl = this.TELEGRAM_URL;
        break;
      case "WHATSAPP_ACCOUNT":
        computedUrl = this.WHATSAPP_URL;
        break;
      case "FACEBOOK_ACCOUNT":
        computedUrl = this.FACEBOOK_URL;
        break;
      case "BLUESKY_ACCOUNT":
        computedUrl = this.BLUESKY_URL;
        break;
      case "TWITTER_ACCOUNT":
        computedUrl = this.TWITTER_URL;
        break;
      case "INSTAGRAM_ACCOUNT":
        computedUrl = this.INSTAGRAM_URL;
        break;
      case "DISCORD_ACCOUNT":
        computedUrl = this.DISCORD_URL;
        break;
      case "VENMO_ACCOUNT":
        computedUrl = this.VENMO_URL;
        break;
      case "CASH_APP_ACCOUNT":
        computedUrl = this.CASH_APP_URL;
        break;
      case "PAYPAL_REQUEST":
        computedUrl = `${this.PAYPAL_URL}${qrConfig.paypalRequestAmountUSD}`;
        break;
      case "ABOUT_TATTOO_PAGE":
        this.router.navigate(["qr/about"]);
        break;
      case "REDIRECTION_URL":
        const url = qrConfig.redirectUrl.startsWith(this.URL_PREFIX) ? qrConfig.redirectUrl : this.URL_PREFIX + qrConfig.redirectUrl;
        computedUrl = url;
        break;
      default:
        break;
    }
    if (!!computedUrl) {
      window.location.href = computedUrl;
    }
  }
  static {
    this.\u0275fac = function QRLandingPage_Factory(t) {
      return new (t || _QRLandingPage)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QRLandingPage, selectors: [["qr-landing-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"]], template: function QRLandingPage_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, QRLandingPage_p_0_Template, 2, 0, "p", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.showFileNotFoundMessage);
      }
    }, dependencies: [CommonModule, NgIf, HttpClientModule], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QRLandingPage, { className: "QRLandingPage", filePath: "src\\app\\qr\\qr_landing_page.ts", lineNumber: 19 });
})();
export {
  QRLandingPage
};
