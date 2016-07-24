## Routing

--

### Routing aktivieren

index.html:
```HTML
<head>
    <base href="/">
</head>
```
systemjs.config.js:
```
var ngPackageNames = [
    ...
    'router',
    ...
  ];
```

--

### Router konfigurieren
- in Bootstrap aufnehmen
```
import {appRouterProviders} from './app.routes';
bootstrap(AppComponent, [ appRouterProviders ]);
```

--

- Routen definieren

app.routes:
```
import {provideRouter, RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DetailComponent} from './detail.component';

const routes: RouterConfig = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' } ]

export const appRouterProviders = [ provideRouter(routes) ];
```

app.component:
```
import {ROUTER_DIRECTIVES} from '@angular/router';

template: ` ...
            <router-outlet></router-outlet>
            `,
directives: [ROUTER_DIRECTIVES],
```

--

### Navigation
```HTML
<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
<a [routerLink]="['/detail', talk.id.toLowerCase()]">{{talk.id}}</a>
```

```
import {Router} from '@angular/router';

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
```

-- 		

### Nesting

#### reine Routing-Komponente

crisis-center.component
```
@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:  [CrisisService]
})
export class CrisisCenterComponent { }
```

--

#### "Kind-Routen"

crisis-center.routes
```
export const crisisCenterRoutes: RouterConfig = [

  ... //default route
  
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      { path: ':id',  component: CrisisDetailComponent },
      { path: '',     component: CrisisListComponent }
    ]
  }
];
```

--

#### Routen für ganze Applikation zusammenführen

app.routes
```
import { provideRouter, RouterConfig }  from '@angular/router';

import { crisisCenterRoutes } from './crisis-center/crisis-center.routes';
import { heroesRoutes }       from './heroes/heroes.routes';

export const routes: RouterConfig = [
  ...heroesRoutes,
  ...crisisCenterRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
```

--

### Route Guards

Erlaubt verschiedene Navigationszenarien:
- Zugriffsschutz auf Pfade
- mögliche Vorbedingungen (z.B. Prefetch) erfüllen
- Speichern vor dem Verlassen?

Arten von Guards:
- CanActivate (zuletzt geprüft, top down)
- CanDeactivate (zuerst geprüft, bottom up)

- -> bei false sofort Abbruch
- (asynchron möglich)

--

crisis-center.routes
```
{ path: 'admin', component: CrisisAdminComponent, canActivate: [AuthGuard] },
```

auth-guard.service
```
import { Injectable }          from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService }         from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}
```

