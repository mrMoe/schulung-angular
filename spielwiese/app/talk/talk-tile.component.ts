import { Component, Input } from '@angular/core';
import { Talk } from './talk';

@Component({
  selector: 'talk-tile',
  template: `
    <h3>{{talk.title}}</h3>
    <span>{{talk.caption}}</span>
  `
})
export class TalkTileComponent {
    @Input() talk: Talk;
}
