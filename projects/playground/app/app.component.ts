import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS],
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent { }
