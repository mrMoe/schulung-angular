## Teil 5 / Navigation

Note:
Mark

--

### Probleme einer SPA (I)
eine Seite vs. komplexe Anwendung <!-- .element class="draft" -->

| Thema       | MPA      | SPA        |
|:-----------:|:--------:|:----------:|
| stat./dyn.  | statisch | dynamisch  |
| BoilerPlate | ja       | vermindert |
| Navigation  | hrefs    | ngRoute    |

--

### Routing (I)
ngRoute, routeProvider, angular-route.js <!-- .element class="draft" -->

- Bibliothek: angular-route.js
- Abhängigkeit
    - Module: ngRoute
    - Service: $routeProvider
- Konfiguration: in module.config
- multiple 'when' Zweige und optional ein 'otherwise'

--

### Routing (I a)

```javascript
myModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
        .when('url1', {template: '<span>HTML-Code</span>'})
        .when('url2', {templateUrl: '/relativer/Pfad/foo.html'})
        .otherwise(redirectTo: 'url1');
  });
```

--

### Routing (II)
ui.router, angular-ui-router.min.js <!-- .element class="draft" -->

- Bibliothek: angular-ui-router.js
- Abhängigkeit
    - Module: ui.router
    - Service: $stateProvider, $urlRouterProvider
- Konfiguration: in module.config
- default Verzweigung mit otherwise
- Navigation über states

--

### Routing (II a)

```javascript
myModule.config(['$urlRouteProvider', '$stateProvider'
  function($urlRouteProvider, $stateProvider) {
    $urlRouteProvider.otherwise('url1');
    $stateProvider
        .state('state1', { url: 'url1', 
            templateUrl: '/relativer/pfad/foo.html})
        .state('state2', { url: 'url2', 
            templateUrl: '/relativer/pfad/bar.html});
  });
```

--

### Fragen ??

--

### Aufgabe:
1. Erstellen einer Navigationsdefinition
1. Erweitern der index.html für's Routing
1. Steuerung der Navigation an den notwendigen Stellen
