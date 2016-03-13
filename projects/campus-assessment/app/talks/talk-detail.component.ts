import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    template: `

<!--
        <div><label>Titel:</label> {{talk.title}}</div>
        <div><label>Beschreibung:</label> {{talk.description}}</div>
        <div><label>Redner:</label> {{talk.speaker.name}}</div>
-->

        <form #form="ngForm">
<!--
            <h2>Vortragsbewertung</h2>
            <div class="form-group">
                <label for="reviewer">Campusbesucher (optional):</label>
                <input id="reviewer" type="text" [(ngModel)]="model.reviewer" minlength="3">
            </div>
            
            <div class="form-group">
                <label>Vortragsbewertung:</label>
                <input id="presentation1" type="radio" [(ngModel)]="model.presentationRating" value="1" required><label for="presentation1">sehr gut</label>
                <input id="presentation2" type="radio" [(ngModel)]="model.presentationRating" value="2" required><label for="presentation2">sehr</label>
                <input id="presentation3" type="radio" [(ngModel)]="model.presentationRating" value="3" required><label for="presentation3">befriedigend</label>
                <input id="presentation4" type="radio" [(ngModel)]="model.presentationRating" value="4" required><label for="presentation4">ausreichend</label>
                <input id="presentation5" type="radio" [(ngModel)]="model.presentationRating" value="5" required><label for="presentation5">mangelhaft</label>
            </div>

            <div class="form-group">
                <label>Thema:</label>
                <input id="topic1" type="radio" [(ngModel)]="model.topic" value="1" required><label for="topic1">interessant</label>
                <input id="topic2" type="radio" [(ngModel)]="model.topic" value="2" required><label for="topic2">geht so</label>
                <input id="topic3" type="radio" [(ngModel)]="model.topic" value="3" required><label for="topic3">uninteresant</label>
            </div>

            <div class="form-group">
                <label>Kompetenz des Referenten:</label>
                <input id="experiences1" type="radio" [(ngModel)]="model.experiences" value="1" required><label for="experiences1">sehr gut</label>
                <input id="experiences2" type="radio" [(ngModel)]="model.experiences" value="2" required><label for="experiences2">gut</label>
                <input id="experiences3" type="radio" [(ngModel)]="model.experiences" value="3" required><label for="experiences3">befriedigend</label>
                <input id="experiences4" type="radio" [(ngModel)]="model.experiences" value="4" required><label for="experiences4">ausreichend</label>
                <input id="experiences5" type="radio" [(ngModel)]="model.experiences" value="5" required><label for="experiences5">mangelhaft</label>
            </div>
            
            <div class="form-group">
                <label for="positives">Was war gut?</label>
                <textarea [(ngModel)]="model.positives"></textarea>
            </div>

            <div class="form-group">
                <label for="missing">Was hat gefehlt?</label>
                <textarea [(ngModel)]="model.missing"></textarea>
            </div>

-->
            <button type="submit" class="btn btn-default" (click)="send()" [disabled]="!form.valid">Absenden</button>
            <button type="button" class="btn btn-default" (click)="gotoOverview()">Zurück zur Übersicht</button>
        </form>
    `
})
export class TalkDetailComponent {
    constructor(private _router: Router){}

    send() {
    }
    
    gotoOverview() {
        this._router.navigate(['Talks']);
    }

}
