import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero} from './hero.interface';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
 
@Component({
    selector: 'heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'] ,
    directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit { 
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private _heroSerivce: HeroService,
        private _router: Router
    ) {}

    getHeroes() {
        this._heroSerivce.getHeroes().then(val => this.heroes = val);
    }

    goToDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { 
        this.selectedHero = hero; 
    }
}

