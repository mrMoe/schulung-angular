import {Component, provide, Inject, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Title} from 'angular2/platform/browser';

import {Config, CONFIG, APP_CONFIG} from './config';
import {SpeakerComponent} from './speakers/speaker.component';
import {TalkComponent} from './talks/talk.component';

@Component({
    selector:'app',
    template: `
        <h1>{{config.title}}</h1>
        <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
              <li [class.active]="router.isRouteActive(router.generate(['Talks']))">   <a [routerLink]="['Talks']">Talks</a></li>
              <li [class.active]="router.isRouteActive(router.generate(['Speakers']))"><a [routerLink]="['Speakers']">Speakers</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `,
    host: {
        class: 'container',
        style: 'display: block;'
    },
    directives: [ROUTER_DIRECTIVES],
    providers: [
        Title, 
        provide(APP_CONFIG, {useValue: CONFIG})
    ]
})
@RouteConfig([
    {path: '/talks/...', name: 'Talks', component: TalkComponent, useAsDefault: true},
    {path: '/speakers', name: 'Speakers', component: SpeakerComponent},
])
export class AppComponent implements OnInit {
    constructor(
        @Inject(APP_CONFIG) public config: Config,
        public router: Router,
        private _title: Title
    ){}

    ngOnInit() {
        this._title.setTitle(this.config.title);
    }
} 
