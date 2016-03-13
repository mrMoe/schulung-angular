import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {TalksService} from './talks.service';
import {TalksListComponent} from './talks-list.component';
import {TalkDetailComponent} from './talk-detail.component';

@Component({
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet],
    providers: [TalksService]
})
@RouteConfig([
    {path: '/', name: 'TalksList', component: TalksListComponent, useAsDefault: true},
    {path: '/:id', name: 'TalkDetail', component: TalkDetailComponent}
])
export class TalksComponent {} 
