import { Component } from '@angular/core';
import {Talk, TalkService, TalkTileComponent} from './talk/talk.providers';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  directives:[TalkTileComponent],
  providers: [TalkService]
})
export class AppComponent {
  constructor(private talkService: TalkService) { };

  talks: Talk[] = this.talkService.getTalks();
}
