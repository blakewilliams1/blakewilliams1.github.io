import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { map } from 'rxjs/operators';

import qrConfigz from "./qr_config.json";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'qr-landing-page',
  templateUrl: './qr_landing_page.html',
  standalone: true,
  imports: [
      CommonModule,
      HttpClientModule
  ],
})
export class QRLandingPage {
  showFileNotFoundMessage = false;
  showEmergencyInfo = false;
  showArViewer = false;
  readonly localQrConfig: QRConfig = qrConfigz as QRConfig;
  readonly CONFIG_FILE_URL =
    'https://api.github.com/repos/blakewilliams1/blakewilliams1.github.io/contents/src/app/qr/qr_config.json';
  readonly VCARD_FILE_URL =
    "https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/app/qr/vcard.vcf";
  readonly GENERIC_FILE_BASE_URL =
    "https://raw.githubusercontent.com/blakewilliams1/blakewilliams1.github.io/main/src/app/qr/generic_files/";
  readonly URL_PREFIX = "https://"
  readonly FACEBOOK_URL = 'https://www.facebook.com/blake.williams.731135';
  readonly TELEGRAM_URL = 'https://t.me/sladewolf';
  readonly WHATSAPP_URL = 'https://wa.me/17605606898';
  readonly PAYPAL_URL = 'https://paypal.me/shadowslade/';
  readonly CASH_APP_URL = 'https://cash.app.regrettispaghetti';
  readonly INSTAGRAM_URL = 'https://instagram.com/_sladewolf';
  readonly DISCORD_URL = 'https://discord.com/users/shadowslade6516';
  readonly TWITTER_URL = 'https://twitter.com/Shadow_slade/';
  readonly BLUESKY_URL = 'https://bsky.app/profile/sladewolf.bsky.social';
  readonly VENMO_URL = 'https://venmo.com/code?user_id=1646046040031232265';

  // Actions that require immediate redirection to something else.
  readonly redirectionActions = [
    'TELEGRAM_ACCOUNT',
    'WHATSAPP_ACCOUNT',
    'FACEBOOK_ACCOUNT',
    'TWITTER_ACCOUNT',
    'INSTAGRAM_URL',
    'BLUESKY_ACCOUNT',
    'DISCORD_ACCOUNT',
    'PAYPAL_REQUEST',
    'VENMO_ACCOUNT',
    'CASH_APP_ACCOUNT',
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
      this.httpClient.get(this.VCARD_FILE_URL, { responseType: 'blob' })
        .subscribe(blob => {
          const fileName =
            this.VCARD_FILE_URL.substring(this.VCARD_FILE_URL.lastIndexOf('/') + 1);
          this.downloadBlob(blob, fileName);
        });
    } else if (qrConfig.actionType === 'GENERIC_FILE_DOWNLOAD') {
      if (!!qrConfig.genericFileName) {
        this.downloadGenericFile(qrConfig.genericFileName);
      } else {
        this.showFileNotFoundMessage = true;
      }
    } else if (qrConfig.actionType === 'EMERGENCY_INFO') {
      this.showEmergencyInfo = true;
    }
  }

  downloadGenericFile(fileName: string) {
    this.httpClient.get(this.GENERIC_FILE_BASE_URL + fileName, { responseType: 'blob' })
      .subscribe(blob => {
        this.downloadBlob(blob, fileName);
      }, () => {
        this.showFileNotFoundMessage = true;
      });
  }

  // Refactored helper function to download generic files.
  private downloadBlob(blob: Blob, fileName: string) {
    const a = document.createElement('a')
    const objectUrl = URL.createObjectURL(blob)
    a.href = objectUrl
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(objectUrl);
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
      case 'BLUESKY_ACCOUNT':
        computedUrl = this.BLUESKY_URL;
        break;
      case 'TWITTER_ACCOUNT':
        computedUrl = this.TWITTER_URL;
        break;
      case 'INSTAGRAM_ACCOUNT':
        computedUrl = this.INSTAGRAM_URL;
        break;
      case 'DISCORD_ACCOUNT':
        computedUrl = this.DISCORD_URL;
        break;
      case 'VENMO_ACCOUNT':
        computedUrl = this.VENMO_URL;
        break;
      case 'CASH_APP_ACCOUNT':
        computedUrl = this.CASH_APP_URL;
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
      default: break;
    }

    // If the computed URL is not null, redirect the user to it in the current window.
    if (!!computedUrl) {
      window.location.href = computedUrl;
    }
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
  | 'BLUESKY_ACCOUNT'
  | 'DISCORD_ACCOUNT'
  | 'GENERIC_FILE_DOWNLOAD'
  | 'VENMO_ACCOUNT'
  | 'PAYPAL_REQUEST'
  | 'CASH_APP_ACCOUNT'
  | 'INSTAGRAM_ACCOUNT'
  | 'EMERGENCY_INFO'
  | 'ABOUT_TATTOO_PAGE';
