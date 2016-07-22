import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FilterArrayPipe } from '../components/filter-array/filter-array.pipe';

import {Talk} from './talk';
import {TalkService} from './talk.service';

@Component({
    template: `
        <div class="alert alert-danger" *ngIf="error">
          <strong>Fehler!</strong> {{error}}
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th><input [(ngModel)]="search.id" class="form-control" placeholder="#"></th>
                    <th><input [(ngModel)]="search.title" class="form-control" placeholder="Title"></th>
                    <th><input [(ngModel)]="search.caption" class="form-control" placeholder="Tagline"></th>
                    <th><input [(ngModel)]="search.speaker.name" class="form-control" placeholder="Redner"></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let talk of talks | filter:search">
                    <th scope="row"><a [routerLink]="['talks', talk.id.toLowerCase()]">{{talk.id}}</a></th>
                    <td>{{talk.title}}</td>
                    <td>{{talk.caption}}</td>
                    <td>{{talk.speaker.name}}</td>
                </tr>
            </tbody>
        </table>
    `,
    directives: [ROUTER_DIRECTIVES],
    pipes: [FilterArrayPipe]
})
export class TalkListComponent implements OnInit {
    talks: Talk[];
    error: string;
    search = { id: null, title: null, caption: null, speaker: { name: null } };

    constructor(private talkService: TalkService) { }

    ngOnInit() {
        // this.talks = this.talkService.getTalks();
        this.talkService.getTalks().subscribe(
            r => this.talks = r,
            e => this.error = e);
    }
}
