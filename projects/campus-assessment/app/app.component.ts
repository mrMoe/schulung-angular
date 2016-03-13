import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TalksComponent} from './talks/talks.component';

@Component({
    selector:'app',
    template: `
        <h1>Campus Assessment</h1>
        <nav>
            <a [routerLink]="['Talks']">Talks</a>
            <a [routerLink]="['Talks']">Speakers</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    host: {
        class: 'container',
        style: 'display: block;'
    }
})
@RouteConfig([
    {path: '/talks/...', name: 'Talks', component: TalksComponent, useAsDefault: true}
])
export class AppComponent {} 
