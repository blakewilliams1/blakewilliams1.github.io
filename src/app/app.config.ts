import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

const inMemoryScrollingFeatures = withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  });
// TODO: work to remove the withNoIncrementalHydration module. It was added by CLI when migrating from v21 to v22.
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeatures),
    provideClientHydration(withEventReplay(), withNoIncrementalHydration()),
    provideNoopAnimations(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
  ]
};
