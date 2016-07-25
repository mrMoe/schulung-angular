import { Component } from '@angular/core';
import { TalkService } from './talk.service';
import { Talk } from './talk';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers: [TalkService]
})
export class AppComponent {
  constructor(private talkService: TalkService) { };

  talks: Talk[] = this.talkService.getTalks();

  // data: String = 'Welt';
  // foo: String = 'bar';

  // update(value) {
  //   console.log(value);
  //   this.foo = value;
  // }
}
