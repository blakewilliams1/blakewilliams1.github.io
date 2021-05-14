import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import qrConfigz from "./qr_config.json";

@Component({
  selector: 'qr-landing-page',
  templateUrl: './qr_landing_page.html',
//   styleUrls: ['./qr_landing_page.scss']
})
export class QRLandingPage {
  readonly qrConfig: QRConfig = qrConfigz as QRConfig;
  readonly URL_PREFIX = "https://www."
  readonly FACEBOOK_URL = 'https://www.facebook.com/blake.williams.731135';
  readonly TELEGRAM_URL = 'https://t.me/Shadowslade';
  readonly WHATSAPP_URL = 'https://wa.me/17605606898';
  readonly PAYPAL_URL = 'https://paypal.me/shadowslade/';
  readonly VENMO_URL = 'https://venmo.com/code?user_id=1646046040031232265';

  // Actions that require immediate redirection to something else.
  readonly redirectionActions = [
    'TELEGRAM_ACCOUNT',
    'WHATSAPP_ACCOUNT',
    'FACEBOOK_ACCOUNT',
    'PAYPAL_REQUEST',
    'VENMO_ACCOUNT',
    'ABOUT_TATTOO_PAGE',
    'REDIRECTION_URL',
  ];

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    if (this.redirectionActions.includes(this.qrConfig.actionType)) {
      this.handleRedirection();
    } else if (this.qrConfig.actionType === 'VCF_DOWNLOAD') {
      // TODO: Fix this not working.
      httpClient.get('../../vcard.vcf', { responseType: 'blob' });
    }
  }

  handleRedirection() {
    let computedUrl;
    switch (this.qrConfig.actionType) {
      case 'TELEGRAM_ACCOUNT':
        computedUrl = this.TELEGRAM_URL;
        break;
      case 'WHATSAPP_ACCOUNT':
        computedUrl = this.WHATSAPP_URL;
        break;
      case 'FACEBOOK_ACCOUNT':
        computedUrl = this.FACEBOOK_URL;
        break;
      case 'PAYPAL_REQUEST':
        computedUrl = `${this.PAYPAL_URL}${this.qrConfig.paypalRequestAmountUSD}`;
        break;
      case 'ABOUT_TATTOO_PAGE':
        this.router.navigate(['qr/about']);
        break;
      case 'REDIRECTION_URL':
      default:
        const url =
        this.qrConfig.redirectUrl.startsWith(this.URL_PREFIX) ?
        this.qrConfig.redirectUrl : this.URL_PREFIX + this.qrConfig.redirectUrl;
        computedUrl = url;
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
  | 'GENERIC_FILE_DOWNLOAD'
  | 'VENMO_ACCOUNT'
  | 'PAYPAL_REQUEST'
  | 'EMERGENCY_INFO'
  | 'ABOUT_TATTOO_PAGE';
