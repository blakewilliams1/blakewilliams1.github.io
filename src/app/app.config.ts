import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const inMemoryScrollingFeatures = withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  });
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeatures),
    provideClientHydration(withEventReplay()),
    provideNoopAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ]
};
