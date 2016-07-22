import {Component, Input} from '@angular/core';
import {RouterLink, Router} from '@angular/router';

import {Talk} from './talk';

@Component({
    selector: 'talk-tail',
    template: `
<!--        <ul (click)="toggleWidth()" [style]="style">-->
        <ul >
            <li (click)="gotoDetail()"><label>Titel:</label> {{talk.title | slice:0:15}}</li>
            <li><label>Tagline:</label> {{talk.caption}}</li>
            <li><a [routerLink]="['TalkDetail', {id: talk.id}]">Details</a></li>
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
    directives: [RouterLink]
})
export class TalkTailComponent {
    @Input() talk: Talk;

    private toggled: boolean = false;
    public style: String;

    constructor(
        private _router: Router
    ) {}

    public toggleWidth() {
        if(this.toggled){
            this.style = 'width:200px';
            this.toggled = false;
        } else {
            this.style = 'width:100%';
            this.toggled = true;
        }
    }

    public gotoDetail() {
        this._router.navigate(['TalkDetail', {id: this.talk.id}]);
    }
}