import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './homepage/home_page';
import { AboutQrPage } from './qr/aboutqr/about_qr_page';
import { QRLandingPage } from './qr/qr_landing_page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: HomePage,
  },
  {
    path: 'projects',
    component: HomePage,
  },
  {
    path: 'qr',
    component: QRLandingPage,
  },
  {
    path: 'qr/about',
    component: AboutQrPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
