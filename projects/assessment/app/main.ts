import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { TalksData } from './talks/talks-data';

bootstrap(AppComponent, [
    appRoutes,
    HTTP_PROVIDERS,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: TalksData },
]);
