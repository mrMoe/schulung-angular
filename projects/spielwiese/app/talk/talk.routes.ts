import { provideRouter, RouterConfig } from '@angular/router';

import { TalkComponent } from './talk.component';
import { TalkListComponent } from './talk-list.component';
import { TalkDetailComponent } from './talk-detail.component';

export const talkRoutes: RouterConfig = [
    {
        path: 'talks', component: TalkComponent, children: [
            { path: '', component: TalkListComponent },
            { path: ':id', component: TalkDetailComponent }
        ]
    },
];
// export const talkRoutes = [
//     provideRouter(routes),
// ];
