import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Talk } from './talk';
import {TalkService} from './talk.service';

@Component({
  selector: 'talk-detail',
  template: `
    <h3>{{talk?.title}}</h3>
    <p><label>Caption</label>{{talk?.caption}}</p>
    <p><label>Speaker</label>{{talk?.speaker?.name}}</p>
    <p><label>Text</label>{{talk?.text}}</p>
  `,
  providers: [TalkService]
})
export class TalkDetailComponent implements OnInit {
  talk: Talk;

  constructor(
    private activeRoute: ActivatedRoute,
    private talkService: TalkService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => 
      this.talk = this.talkService.getTalk(params['id']))
  }
}
