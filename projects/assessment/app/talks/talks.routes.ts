import { RouterConfig } from '@angular/router';

import {TalksComponent} from './talks.component';
import {TalkListComponent} from './talk-list.component';
import {TalkDetailComponent} from './talk-detail.component';

export const talksRoutes: RouterConfig = [
    {
        path: 'talks',
        component: TalksComponent,
        children: [
            { path: '', component: TalkListComponent },
            { path: ':id', component: TalkDetailComponent }
        ]
    }
];
