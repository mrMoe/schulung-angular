import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {TalkService} from './talk.service';

@Component({
    template: `
        <h2>Talks</h2>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TalkService]
})
export class TalksComponent { } 
