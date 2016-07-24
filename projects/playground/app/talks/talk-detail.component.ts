import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

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
export class TalkDetailComponent implements OnInit {
    public talk: Talk;
    error = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private _talkService: TalkService
    ){}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this._talkService.getTalk(params['id'])
                .subscribe(t => this.talk = t, e => this.error = e);
        });
    }
}