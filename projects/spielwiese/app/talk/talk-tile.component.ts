import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Talk } from './talk';

@Component({
  selector: 'talk-tile',
  template: `
    <h3><a [routerLink]="[talk.id]">{{talk.title}}</a></h3>
    <span>{{talk.caption}}</span>
  `,
  directives:[ROUTER_DIRECTIVES]

})
export class TalkTileComponent {
  @Input() talk: Talk;
}
