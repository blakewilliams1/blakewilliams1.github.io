import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { map } from 'rxjs/operators';

import qrConfigz from "./qr_config.json";

@Component({
  selector: 'qr-landing-page',
  templateUrl: './qr_landing_page.html',
//   styleUrls: ['./qr_landing_page.scss']
})
export class QRLandingPage {
  showUnsupportedRedirectionMessage = false;
  showEmergencyInfo = false;
  readonly localQrConfig: QRConfig = qrConfigz as QRConfig;
  readonly CONFIG_FILE_URL =
      'https://api.github.com/repos/blakewilliams1/blakewilliams1.github.io/contents/src/app/qr/qr_config.json';
  readonly URL_PREFIX = "https://"
  readonly FACEBOOK_URL = 'https://www.facebook.com/blake.williams.731135';
  readonly TELEGRAM_URL = 'https://t.me/Shadowslade';
  readonly WHATSAPP_URL = 'https://wa.me/17605606898';
  readonly PAYPAL_URL = 'https://paypal.me/shadowslade/';
  readonly TWITTER_URL = 'https://twitter.com/Shadow_slade/';
  readonly VENMO_URL = 'https://venmo.com/code?user_id=1646046040031232265';

  // Actions that require immediate redirection to something else.
  readonly redirectionActions = [
    'TELEGRAM_ACCOUNT',
    'WHATSAPP_ACCOUNT',
    'FACEBOOK_ACCOUNT',
    'PAYPAL_REQUEST',
    'TWITTER_ACCOUNT',
    'VENMO_ACCOUNT',
    'ABOUT_TATTOO_PAGE',
    'REDIRECTION_URL',
  ];

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    if (isDevMode()) {
      this.executeConfigSettings(this.localQrConfig);
    } else {
      httpClient.get(this.CONFIG_FILE_URL)
        .pipe(
          map(response => atob(((response as ConfigResponse).content))),
          map(content => JSON.parse(content) as QRConfig),
        )
        .subscribe(content => {
          this.executeConfigSettings(content);
        });
    }
  }

  executeConfigSettings(qrConfig: QRConfig) {
    if (this.redirectionActions.includes(qrConfig.actionType)) {
      this.handleRedirection(qrConfig);
    } else if (qrConfig.actionType === 'VCF_DOWNLOAD') {
      // TODO: Fix this not working.
      this.httpClient.get('../../vcard.vcf', { responseType: 'blob' });
    } else if (qrConfig.actionType === 'EMERGENCY_INFO') {
      this.showEmergencyInfo = true;
    }
  }

  handleRedirection(qrConfig: QRConfig) {
    let computedUrl;
    switch (qrConfig.actionType) {
      case 'TELEGRAM_ACCOUNT':
        computedUrl = this.TELEGRAM_URL;
        break;
      case 'WHATSAPP_ACCOUNT':
        computedUrl = this.WHATSAPP_URL;
        break;
      case 'FACEBOOK_ACCOUNT':
        computedUrl = this.FACEBOOK_URL;
        break;
      case 'TWITTER_ACCOUNT':
        computedUrl = this.TWITTER_URL;
        break;
      case 'VENMO_ACCOUNT':
        computedUrl = this.VENMO_URL;
        break;
      case 'PAYPAL_REQUEST':
        computedUrl = `${this.PAYPAL_URL}${qrConfig.paypalRequestAmountUSD}`;
        break;
      case 'ABOUT_TATTOO_PAGE':
        this.router.navigate(['qr/about']);
        break;
      case 'REDIRECTION_URL':
        const url =
          qrConfig.redirectUrl.startsWith(this.URL_PREFIX) ?
            qrConfig.redirectUrl : this.URL_PREFIX + qrConfig.redirectUrl;
        computedUrl = url;
        break;
      default: this.showUnsupportedRedirectionMessage = true;
    }

    if (!!computedUrl) {
      window.location.href = computedUrl;
    }
  }

  calculateAge() {
    const birthday = new Date();
    birthday.setMonth(7);
    birthday.setDate(26);
    birthday.setFullYear(1994);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export interface ConfigResponse {
  content: string;
}

export interface QRConfig {
  actionType: ActionType;
  redirectUrl: string;
  genericFileName: string;
  paypalRequestAmountUSD: number;
}

type ActionType =
  'REDIRECTION_URL'
  | 'VCF_DOWNLOAD'
  | 'TELEGRAM_ACCOUNT'
  | 'WHATSAPP_ACCOUNT'
  | 'FACEBOOK_ACCOUNT'
  | 'TWITTER_ACCOUNT'
  | 'GENERIC_FILE_DOWNLOAD'
  | 'VENMO_ACCOUNT'
  | 'PAYPAL_REQUEST'
  | 'EMERGENCY_INFO'
  | 'ABOUT_TATTOO_PAGE';
