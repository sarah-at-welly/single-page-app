import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import routeConfig from './routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(
      withFetch(),
    ),
    provideClientHydration()
  ]
};