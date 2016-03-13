import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


import {TalkService} from './talk.service';
import {TalkListComponent} from './talk-list.component';
import {TalkDetailComponent} from './talk-detail.component';

@Component({
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [TalkService],

})
@RouteConfig([
    {path: '/', name: 'TalkList', component: TalkListComponent, useAsDefault: true},
    {path: '/:id', name: 'TalkDetail', component: TalkDetailComponent}
])
export class TalkComponent {} 
