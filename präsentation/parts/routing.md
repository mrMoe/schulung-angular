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
