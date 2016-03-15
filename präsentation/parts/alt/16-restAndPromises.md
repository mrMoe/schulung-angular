## Teil 6 / Schnittstellen

--

### $http
- Service für HTTP-Requests

```javascript
var req = {
    method: 'POST', url: 'http://example.com',
    headers: { 'Content-Type': undefined },
    data: { foo: 'bar' },  cache: false
}
$http(req)
    .success(function(data, status, headers, config) {...})
    .error(function(data, status, headers, config) {...});

$http.get('/getdata').success( ... ).error( ... )
$http.post('/setdata', {data: 'Max Mustermann'}).success( ... ).error( ... )
```

--

### $httpBackend
- Mock für $http

```javascript
$httpBackend.expectGET('/getdata').respond([{name: 'Javascript echt Schräg'}]);
var talks = $http.get('/getdata');
$httpBackend.flush();

expect(talks[0].name).toBe('Javascript echt Schräg');
```

--

### Promises
- Promises weiterentwicklung von Callbacks
- Promise liefert immer ein Promise zurück -> Chainable
- `$q`-Api hat `.all([...])` zum Auswerten mehrerer Promises
- zusammenfasende Fehlerbehandlung aller Promises

<pre style="display:inline-block;float:left;width:51% !important;"><code class="javascript">$.get('/getdata')
    .success(function(response) {
        $.get('/getdata')
            .success(function(response) { ... })
            .error(function(error) { ... })
    })
    .error(function(error) { ... });
</code></pre>

<pre style="display:inline-block;float:right;width:47% !important;"><code class="javascript">$http.get('/getdata').then(
    function success(response) { ... },
    function error(reason) { ... }
)
.then(...)
.then(null, function error(reason) {...});
</code></pre>

Note:
- Binding von Events kann zu spät sein
- Events gut für Dinge, die mehrfach passieren (Keyup, touchstart)
- Standard in ES6; derzeit verschiedene API's'

--

### $resource
- Abstraktion von $http
- Anbindung an REST-Services
- Vorbereitet auf CRUD: get, query, save, remove, delete
- Class-Calls ohne '$'; Object-Calls mit '$'

```javascript
var talkResource = $resource('localhost/talks/:id', {}, {get: {method:'GET'}});
talkResource.get({id: 1234}, function success(talk) {
    talk.name = "Neuer Name";
    talk.$save();
}, function error() { ... }).$promise;
```
```html
<section ng-repeat="talk in talkResource.query() | orderBy:'schedule.time'">
    <label>Name: </label><input ng-model="talk.name" />
    <button ng-click="talk.$save()">Aktualisieren</button>
</section>
```

Note:
- Resource gibt erstmal leeres Objekt zurück das nach Server response gefüllt wird

--

### Fragen ?

--

### Aufgabe
1. Erstellen eines neuen Moduls für die Schnittstellen-Anbindung
2. Zugriff per $http auf einen Webservice und darstellen des Rückgabewertes
3. Unittest für den Zugriff mittels $httpBackend erstellen
4. Eine Resource für die Talks-API erstellen und die vorhandenen Talks mit ng-repeat anzeigen