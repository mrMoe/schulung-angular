import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import {Talk} from './talk';

@Component({
    selector: 'talk-tail',
    template: `
        <ul (click)="toggleWidth()" [style.background]="background">
            <li (click)="gotoDetail()"><label>Titel:</label> {{talk.title}}</li>
            <li><label>Tagline:</label> {{talk.caption}}</li>
            <li><a [routerLink]="['/talks', {id: talk.id}]">Details</a></li>
        </ul>
    `,
    styles: [`
        ul {
            border: 1px solid silver;
            padding: 0;
            margin: .5em;
            width:200px;
        }
        li {
            display: block;
            padding: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    `],
    directives: [ROUTER_DIRECTIVES]
})
export class TalkTailComponent {
    @Input() talk: Talk;

    private toggled: boolean = false;
    public background: String;

    constructor(
        private router: Router
    ) {}

    public toggleWidth() {
        if(this.toggled){
            this.background = 'initial';
            this.toggled = false;
        } else {
            this.background = 'silver';
            this.toggled = true;
        }
    }

    public gotoDetail() {
        this.router.navigate(['/talks', {id: this.talk.id}]);
    }
}