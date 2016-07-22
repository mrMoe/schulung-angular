import { provideRouter, RouterConfig } from '@angular/router';

import { speakersRoutes }               from './speakers/speakers.routes';
import { talksRoutes }                  from './talks/talks.routes';
import { authRoutes, authProviders }    from './components/auth/auth.routes';

const routes: RouterConfig = [
    { path: '', redirectTo: 'talks', pathMatch: 'full' },
    ...talksRoutes,
    ...speakersRoutes,
    ...authRoutes
];

export const appRoutes = [
    provideRouter(routes),
    authProviders
];
