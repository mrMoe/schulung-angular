import { provideRouter, RouterConfig } from '@angular/router';

import { talkRoutes } from './talk/talk.routes';

const routes: RouterConfig = [
    ...talkRoutes
];

export const appRoutes = [
    provideRouter(routes),
];
