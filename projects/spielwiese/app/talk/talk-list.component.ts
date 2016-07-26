import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Talk } from './talk';
import { TalkService, TalkTileComponent} from './talk.providers';

@Component({
  selector: 'talk-list',
  template: `
    <talk-tile [talk]="current" 
      *ngFor="let current of talks" 
      (click)="select.emit(current)"></talk-tile>`,
  styles: [
    ':host {display:flex;flex-direction: row;flex-wrap: wrap;}',
    'talk-tile { margin:1em; padding: 1em; width: 200px; background-color: lightgrey; border: 1px solid darkgrey;}'],
  directives: [TalkTileComponent],
  providers: [TalkService],

})
export class TalkListComponent {
  @Output() select = new EventEmitter();

  constructor(private talkService: TalkService) { };

  talks: Talk[] = this.talkService.getTalks();
}
