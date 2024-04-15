import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./homepage/home_page_module').then(m => m.HomePageModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career_page_module').then(m => m.CareerPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects_page_module').then(m => m.ProjectsPageModule)
  },
  {
    path: 'travels',
    loadChildren: () => import('./travels/travels_page_module').then(m => m.TravelsPageModule)
  },
  {
    path: 'cssinjection',
    loadChildren: () => import('./projects/cssinjection/css_injection_page_module').then(m => m.CssInjectionPageModule)
  },
  {
    path: 'burning_man_2023',
    loadChildren: () => import('./travels/burning_man_2023/burning_man_2023_page_module').then(m => m.BurningMan2023PageModule)
  },
  {
    path: 'mauritania_trip',
    loadChildren: () => import('./travels/mauritania_trip/mauritania_trip_page_module').then(m => m.MauritaniaTripPageModule)
  },
  {
    path: 'shasta',
    loadChildren: () => import('./travels/shasta/shasta_page_module').then(m => m.ShastaTripPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr_landing_page_module').then(m => m.QRLandingPageModule)
  },
  {
    path: 'qr/about',
    loadChildren: () => import('./qr/aboutqr/about_qr_page_module').then(m => m.AboutQrPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
