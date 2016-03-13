import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TalkService} from './talk.service';
import {TalkListComponent} from './talk-list.component';
import {TalkDetailComponent} from './talk-detail.component';

@Component({
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet],
    providers: [TalkService]
})
@RouteConfig([
    {path: '/', name: 'TalkList', component: TalkListComponent, useAsDefault: true},
    {path: '/:id', name: 'TalkDetail', component: TalkDetailComponent}
])
export class TalkComponent {} 
