import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TalkService } from './talk.service';
import { TalkListComponent } from './talk-list.component';
import { TalkDetailComponent } from './talk-detail.component';

@Component({
    directives: [RouterOutlet],
    providers: [TalkService],
    template: `<router-outlet></router-outlet>`
})

export class TalkComponent { }
