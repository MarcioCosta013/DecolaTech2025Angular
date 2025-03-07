import { mergeApplicationConfig, ApplicationConfig, importProvidersFrom  } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { FormsModule  } from '@angular/forms';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
    importProvidersFrom(FormsModule),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
