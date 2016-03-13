import {Component, OnInit} from 'angular2/core';

import {Talk} from './talk';
import {TalksService} from './talks.service';

@Component({
    template: `
        <table class="table">
            <thead>
                <tr>
                    <th><input class="form-control" placeholder="#"></th>
                    <th><input class="form-control" placeholder="Title"></th>
                    <th><input class="form-control" placeholder="Redner"></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#talk of talks">
                    <th scope="row"><a href="">{{talk.id}}</a></th>
                    <td><a href="">{{talk.id}}</a></td>
                    <td><a href="">{{talk.speaker.name}}</a></td>
                </tr>
            </tbody>
        </table>
`,
})
export class TalksListComponent implements OnInit {
    
    talks: Talk[];
    error: string;
    
    constructor(private _talksService: TalksService){}

    ngOnInit() {
        this._talksService.getTalks().subscribe(
                                    success => this.talks = success, 
                                    error => this.error = error);
    }
}
