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
  }
  `;

  readonly spanishDictCss = `
  /* Limited page view popup. */
  .ReactModalPortal {
    visibility: hidden;
  }`;

  readonly twitterCss = `
  /**
   * Not functional till :has() selector is implemented.
   * Very har to make selector for twitter :(
   */
  article:has([data-testid="socialContext"]) {
    display: none;
  }
  `;
}
