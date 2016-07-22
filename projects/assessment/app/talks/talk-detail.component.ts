import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

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
        private _route: ActivatedRoute,
        private _talkService: TalkService
    ) { }

    talk: Talk = null;
    review = {};
    saved: boolean = false;
    error = null;

    ngOnInit() {
        // this._route.params
        //     .map(p => this._talkService.getTalk(p['id']))
        //     .subscribe(t => this.talk = t);
    }

    send() {
        // this._talkService.addReview(this.talk, this.review)
        //     .subscribe(t => {
        //         this.talk = t;
        //         this.review = {};
        //         this.saved = true;
        //     }, e => this.error = e);
    }

    reset() {
        this.review = {};
    }
    overview() {
        this._router.navigate(['talks']);
    }
}
