import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'app',
    directives:[ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService],
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
})
@RouteConfig([{
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
},{
    path: '/heroes/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
},{
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
}])
export class AppComponent {
    title = 'Tour of Heroess';

}
