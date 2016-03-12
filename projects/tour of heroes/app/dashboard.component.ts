import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero.interface';
import {HeroService}  from './hero.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private _heroService: HeroService,
        private _router: Router
    ){}

    ngOnInit() {
        this._heroService.getHeroes().then(val => this.heroes = val.slice(1, 5));
    }

    goToDetail(hero: Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);

    }
}