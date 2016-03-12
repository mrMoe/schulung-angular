import {Injectable} from 'angular2/core';
import {Hero} from './hero.interface'; 
import {HEROES} from './heroes.mock';

@Injectable()
export class HeroService {
    getHeroes() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 100)
        );
    }

    getHero(id: Number) {
        return this.getHeroes().then(x => x.filter(y => y.id === id)[0]);
    }
}

