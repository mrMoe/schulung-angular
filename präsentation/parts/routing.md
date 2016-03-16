## Routing

--

### Routing aktivieren

```HTML
<script src="node_modules/angular2/bundles/router.dev.js"></script>
<base href="/">
```

--

### Router konfigurieren
- in weitere Dateien aufteilen
- Default Route

```
@RouteConfig([
    {path: '/talks', name: 'Talks', component: TalkListComponent, useAsDefault: true},
    {path: '/talks/:id', name: 'TalkDetail', component: TalkDetailComponent}
])
export class AppComponent {}
```

```HTML
template: `
    <div class="container">
        <router-outlet></router-outlet>
    </div>
`,
```

--

### Navigation
```HTML
<a [routerLink]="['TalkDetail', {id: talk.id.toLowerCase()}]">
   {{talk.id}}</a>
```

-- 

### Nesting

```
@RouteConfig([
    {path: '/talks/...', name: 'Talks', component: TalkComponent, useAsDefault: true},
])
export class AppComponent {}
```

```
@RouteConfig([
    {path: '/', name: 'TalkList', component: TalkListComponent, useAsDefault: true},
    {path: '/:id', name: 'TalkDetail', component: TalkDetailComponent}
])
export class TalkComponent {}
```
