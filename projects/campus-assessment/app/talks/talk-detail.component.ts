import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {Talk} from './talk';
import {TalkService} from './talk.service';

@Component({
    templateUrl: 'app/talks/talk-detail.component.html',
    styles: [`
        .ng-valid[required] {
            border-left: 5px solid #42A948 /* green */
        }
        .ng-invalid {
            border-left: 5px solid #a94442 /* red */
        }
    `]
})
export class TalkDetailComponent implements OnInit {
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _talkService: TalkService
    ){}

    talk: Talk = null;
    review = {};
    saved: boolean = false;

    ngOnInit() {
        this._talkService.getTalk(this._routeParams.get('id')).subscribe(r => this.talk = r);
    }

    send() {
        this.saved = true;
    }
    
    reset() {
        this.review = {};
    }
}
