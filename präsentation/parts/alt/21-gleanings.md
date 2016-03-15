## Nachlese

--

### Events
- `$scope` hat Event-System 
- `$broadcast` an alle Kinder
- `$emit` an alle Eltern
- Nur Atomaren Operationen

```javascript
$scope.$emit('StartChildAdd', child);
...
$scope.$on('StartChildAdd', function(event, child) {
    $scope.$broadcast('EndChildAdd', child);
});

```

--

### Forms
- `form`-Tag Gruppierung und Validierung von Controlls
- `ng-form` ist Schachtelbar
- Server-Validierung immer noch nötig
- `input`, `select`, `textarea` mit `ng-model` an `$scope` binden
- Validatoren `required, pattern, maxlength`
- `name`-Attribut macht Form im `$scope` verfügbar

```html
<ng-form name="myForm" novalidate>
    <input type="text" ng-model="user.name" required="" maxlength="10" />
    <span ng-show="myForm.name.$error.maxlength">Name zu lang</span>
    
    <input type="email" ng-model="user.email" name="email" required />
    
    <button ng-click="send()" ng-disabled="!myForm.$valid()">Speichern</button>
</ng-form>
```

Note:
- novalidate verhindert Browser-Validation
- $scope wird nicht gesetzt wenn invalid

--

### ngCookies
- eigenes Modul ngCookies
- `get, getObject, getAll, put, putObject, remove`

```javascript
angular.module('app', ['ngCookies'])
    .controller('myController', function($cookies) {
        var favoriteCookie = $cookies.get('myFavorite');
        favoriteCookie = 'angular';
        $cookies.put('myFavorite', favoriteCookie);
    });
```

--

### ngTouch
- `ngClick`
    - kein 300ms delay bei Mobile Browser
    - Kann Desktop und Mobile Browser
- `ngSwipeLeft`, `ngSwipeRight`
    - Wischgesten von Touchscreens

```html
<div ng-show="!showActions" ng-swipe-left="showActions = true">
    Artikel
    ...
</div>
<div ng-show="showActions" ng-swipe-right="showActions = false">
    <textarea ng-model="message"></textarea>
    <button ng-click="reply()">Antworten</button>
</div>
```

--

### i18n
- Localsierung in `date`, `number` und `currency`

<pre ng-non-bindable><code>{{ 1000 | currency }} > $1,000.00 || €1000,00</code></pre>

- Modul angular-translate
```javascript
angular.module('app', ['pascalprecht.translate']);
$translateProvider.translations(‘de’, {
    APP_HEADLINE:  'Großartige AngularJS App',
    GREETING:      'Hallo mein Name ist {{name}} ',
});
$translateProvider.translations('en', {
    APP_HEADLINE:  'Awesome AngularJS App',
    GREETING:      'Hello my name is {{name}}',
});
$translateProvider.preferredLanguage(‘de’);
//determinePreferredLanguage();
...
$translate(‘APP_HEADLINE’).then(function (text) { ... });
$translate.use('en').then(function (key) { ... })
```
```html
<h1>{{ 'APP_HEADLINE' | translate }</h1>
<h1 translate="GREETING" translate-value-name="Max"></h1>
```

--

### Grunt
- Javascript Taskrunner zur Automatisierung
- Compass
- Minification
- Unittesting
- Linting
...

--

### Minification
```
angular.module('app').controller('myController', function($scope) { ... }); ```
```fragment
angular.module('app').controller('myController',function(a){ ... }); ```
- Dependency Annotation <!-- .element: class="fragment" -->
```
angular.module('app').controller('myController',['$scope',function(a){ ... });```
- grunt-ng-annotate <!-- .element: class="fragment" -->
```
grunt.initConfig({
    ngAnnotate: {
        production: {
            files: {
                src: '*.js',
                ext: '.annotaded.js'
            } } } })
```

Note:
- Code-Minification reduziert Parameternamen auf einzelne Buchstaben, daher keine DI möglich

--

### SASS, Compass
- CSS Präprozessor
- Nesting von CSS-Klassen
- Vendor-Prefixes
- Mixins für Resets, Transitions und viele andere
- Sprite-Generator

--

### Unterstützung be komplexen Anwendungen
- require.js: Auflösung von dev-Abhängigkeiten
- jQuery: DOM-Selections API

--

### IDE
- Jetbrains Intellij
- Adobe brackest.io
- Texteditor
- Browser-Debugger
- Chrome Workspaces

--

### Selbsthilfe
- RTFM https://docs.angularjs.org/guide
- https://docs.angularjs.org/api
- https://angularjs.de/buch