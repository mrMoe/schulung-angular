import {Component, OnInit} from '@angular/core';
import {RouteConfig, RouterOutlet, ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {TalkComponent} from './talks/talk.component';

@Component({
    selector: 'app',   
    directives: [RouterOutlet],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    {path: '/talks/...', name: 'Talks', component: TalkComponent, useAsDefault: true}
])
export class AppComponent {}
