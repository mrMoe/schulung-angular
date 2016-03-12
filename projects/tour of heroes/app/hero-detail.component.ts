import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Hero} from './hero.interface';
import {HeroService} from './hero.service';

@Component({
    inputs: ['hero'],
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero = {};

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams
    ) {}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(v => this.hero = v);
    }

    goBack() {
        window.history.back();
    }
}