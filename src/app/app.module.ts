import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AboutQrPageModule } from './qr/aboutqr/about_qr_page_module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './homepage/home_page_module';
import { QRLandingPageModule } from './qr/qr_landing_page_module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutQrPageModule,
    QRLandingPageModule,
    HomePageModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

const __stripTrailingSlash = (Location as any).stripTrailingSlash;
Location.stripTrailingSlash = function (url) {
  if (url.endsWith('/')) {
    url = url;
  }
  else {
    url = url + '/';
  }
  const queryString$ = url.match(/([^?]*)?(.*)/) || ['', '', ''];
  if (queryString$[2].length > 0) {
    return /[^\/]\/$/.test(queryString$[1]) ? queryString$[1] + '.' + queryString$[2] : __stripTrailingSlash(url);
  }

  return /[^\/]\/$/.test(url) ? url + '.' : __stripTrailingSlash(url);
};
