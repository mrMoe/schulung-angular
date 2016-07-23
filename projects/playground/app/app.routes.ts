import { provideRouter, RouterConfig } from '@angular/router';

import { TalkComponent } from './talks/talk.component';
import { TalkListComponent } from './talks/talk-list.component';
import { TalkDetailComponent } from './talks/talk-detail.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'talks', pathMatch: 'full' },
    {
        path: 'talks', component: TalkComponent, children: [
            { path: '', component: TalkListComponent },
            { path: ':id', component: TalkDetailComponent }
        ]
    }
];

export const appRoutes = [
    provideRouter(routes),
];
