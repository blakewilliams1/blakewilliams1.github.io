import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./homepage/home_page').then(m => m.HomePage)
  },
  {
    path: 'career',
    loadComponent: () => import('./career/career_page').then(m => m.CareerPage)
  },
  {
    path: 'projects',
    loadComponent: () => import('./projects/projects_page').then(m => m.ProjectsPage)
  },
  {
    path: 'fursuit',
    loadComponent: () => import('./projects/fursuit/fursuit_page').then(m => m.FursuitPage)
  },
  {
    path: 'neon-sign',
    loadComponent: () => import('./projects/neonsign/neon_sign_page').then(m => m.NeonSignPage)
  },
  {
    path: 'travels',
    loadComponent: () => import('./travels/travels_page').then(m => m.TravelsPage)
  },
  {
    path: 'css-injection',
    loadComponent: () => import('./projects/cssinjection/css_injection_page').then(m => m.CssInjectionPage)
  },
  {
    path: 'burning-man-2023',
    loadComponent: () => import('./travels/burning_man_2023/burning_man_2023_page').then(m => m.BurningMan2023Page)
  },
  {
    path: 'mauritania-trip',
    loadComponent: () => import('./travels/mauritania_trip/mauritania_trip_page').then(m => m.MauritaniaTripPage)
  },
  {
    path: 'road-to-ushuaia',
    loadComponent: () => import('./travels/road_to_ushuaia/road_to_ushuaia_page').then(m => m.RoadToUshuaiaPage)
  },
  {
    path: 'shasta',
    loadComponent: () => import('./travels/shasta/shasta_page').then(m => m.ShastaTripPage)
  },
  {
    path: 'half-dome',
    loadComponent: () => import('./travels/half_dome_2022/half_dome_hike_page').then(m => m.HalfDomeHikePage)
  },
  {
    path: 'qr',
    loadComponent: () => import('./qr/qr_landing_page').then(m => m.QRLandingPage)
  },
  {
    path: 'qr/about',
    loadComponent: () => import('./qr/aboutqr/about_qr_page').then(m => m.AboutQrPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact_form_page').then(m => m.ContactFormPage)
  },
  // Invalid routes (404) should redirect back to home page.
  {
    path: '**', pathMatch: 'full',  
    redirectTo: '',
  }, 
];
