import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

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
        private router: Router,
        private route: ActivatedRoute,
        private talkService: TalkService
    ) { }

    talk: Talk;
    review = {};
    saved: boolean = false;
    error = null;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.talkService.getTalk(params['id'])
                .subscribe(t => this.talk = t, e => this.error = e);
        });
    }

    send() {
        this.talk.reviews = this.talk.reviews || [];
        this.talk.reviews.push(this.review);
        this.talkService.save(this.talk)
            .subscribe(() => {
                this.review = {};
                this.saved = true;
            }, e => this.error = e);
    }

    reset() {
        this.review = {};
    }
    overview() {
        this.router.navigate(['talks']);
    }
}
