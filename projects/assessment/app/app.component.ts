import { Component, provide, Inject, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Title } from '@angular/platform-browser';

import './rxjs.operators';

import { APP_CONFIG, Config, ConfigProviders } from './config';

@Component({
    selector: 'app',
    template: `
        <h1>{{config.title}}</h1>
        <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
              <li [routerLinkActive]="['active']"><a [routerLink]="['/talks', {color:'lime'}]">Talks</a></li>
              <li [routerLinkActive]="['active']"><a [routerLink]="['/speakers']">Speakers</a></li>
              <li [routerLinkActive]="['active']"><a [routerLink]="['/login']">Login</a></li>
            </ul>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        Title,
        ConfigProviders
    ]
})

export class AppComponent implements OnInit {
    constructor(
        @Inject(APP_CONFIG) public config: Config,
        private title: Title
    ) { }

    ngOnInit() {
        this.title.setTitle(this.config.title);
    }
} 
