import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
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
    path: 'mountainboard',
    loadComponent: () => import('./projects/mountainboard/mountainboard_page').then(m => m.MountainboardPage)
  },
  {
    path: 'smart-pay-watch',
    loadComponent: () => import('./projects/smartpaywatch/smart_pay_watch_page').then(m => m.SmartPayWatchPage)
  },
  {
    path: 'dot-matrix-watch',
    loadComponent: () => import('./projects/dotmatrixwatch/dot_matrix_watch').then(m => m.DotMatrixWatchPage)
  },
  {
    path: 'altimeter',
    loadComponent: () => import('./projects/minitronaltimeter/minitron_altimeter_page').then(m => m.MinitronAltimeterPage)
  },
  {
    path: 'flip-dot-display',
    loadComponent: () => import('./projects/flipdotdisplay/flip_dot_display').then(m => m.FlipDotDisplayPage)
  },
  {
    path: 'nixie-watch',
    loadComponent: () => import('./projects/nixiewatch/nixie_watch_page').then(m => m.NixieWatchPage)
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
    path: 'indonesia-2019',
    loadComponent: () => import('./travels/indonesia_2019/indonesia_2019_page').then(m => m.Indonesia2019Page)
  },
  {
    path: 'euro-trip-2023',
    loadComponent: () => import('./travels/euro_trip_2023/euro_trip_2023_page').then(m => m.EuroTrip2023Page)
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
    loadComponent: () => import('./contact/contact_form_page').then(m => m.ContactFormPage),
    // This is for animations on the form input fields. Nothing else in the application uses animations, so they're
    // lazy loaded just in the one component that uses it.
    providers: [provideAnimationsAsync()],
  },
  // Invalid routes (404) should redirect back to home page.
  {
    path: '**', pathMatch: 'full',  
    redirectTo: '',
  }, 
];
