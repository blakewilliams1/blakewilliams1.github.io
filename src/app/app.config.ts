import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const inMemoryScrollingFeatures = withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  });
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, inMemoryScrollingFeatures), provideClientHydration(), provideAnimationsAsync()]
};
