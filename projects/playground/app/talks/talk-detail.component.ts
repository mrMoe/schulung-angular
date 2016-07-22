import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router';

import {Talk} from './talk';
import {TalkService} from './talk.service';

@Component({
    template: `
        <ul >
            <li><label>Titel:</label> {{talk.title}}</li>
            <li><label>Tagline:</label> {{talk.caption}}</li>
            <li><label>Beschreibung:</label> {{talk.text}}</li>
        </ul>
    `    
})
export class TalkDetailComponent {
    public talk: Talk = {};

    constructor(
        private _talkService: TalkService,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._talkService.getTalk(id).subscribe(x => this.talk = x);
    }
}