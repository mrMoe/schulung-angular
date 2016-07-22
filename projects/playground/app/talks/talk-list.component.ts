import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Talk} from './talk';
import {TalkService} from './talk.service';
import {TalkTailComponent} from './talk-tail.component';

@Component({
    template: `
        <talk-tail *ngFor="#i of talks | async" [talk]="i"></talk-tail>
    `,
    providers: [TalkService],
    directives: [TalkTailComponent],
    host: {
        style:'display:flex;flex-direction: row;flex-wrap: wrap;'
    }
})
export class TalkListComponent {
    public talks: Observable<Talk[]>;

    constructor(
        private _talkService: TalkService
    ) {}
    
    ngOnInit() {
        this.talks = this._talkService.getTalks();
    }
}