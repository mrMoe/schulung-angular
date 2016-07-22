import { RouterConfig } from '@angular/router';

import {AuthGuard} from '../components/auth/auth.guard';

import {SpeakersComponent} from './speakers.component';

export const speakersRoutes: RouterConfig = [
    { path: 'speakers', component: SpeakersComponent, canActivate: [AuthGuard] }
];
