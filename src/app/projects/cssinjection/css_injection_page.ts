import { Component } from '@angular/core';

@Component({
  selector: 'css-injections-page',
  templateUrl: './css_injection_page.html',
  styleUrls: ['./css_injection_page.scss']
})
export class CssInjectionPage {
  readonly pornhubCss = `
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
  }`;

  readonly spanishDictCss = `
  /* Limited page view popup. */
  .ReactModalPortal {
    visibility: hidden;
  }`;

  readonly twitterCss = `
  article:has([data-testid="socialContext"]) {
    display: none;
  }`;

  readonly youtubeCss = `
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
  }`;
}
