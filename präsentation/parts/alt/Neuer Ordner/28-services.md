## Services

--

### Services - Übersicht

| Srv-Def.    |     API      | Beschreibung                          |
| :---------: | :----------: | :-----------------------------------: |
| provider    | provider(..) | Grundlegene API zur Servicedefinition |
| factory     | factory(..)  | Baut auf Provider API auf             |
| c-tor Fkt   | service(..)  | Baut auf Factory API auf              |
| WerteService| value(..)    | Baut auf Factory API auf              |
| Konst-Def   | constant(..) | Baut auf providerCache auf            |

--

### Services - Provider
- Grundlegende API zur Servicedefinition
- liefert einen Singleton
- muss $get Funktion enthalten. die Serviceinstanz zurückgibt
- Aufruf

```javascript
modul.provider('providerName', function(dependency[]){
    /*- do sthg */
    this.$get = function() { ... };
    };
});
```
--

### Services - Factory
- Aufruf

```javascript
modul.factory('factoryName', function(dependency[]){...});
```

- baut auf Provider-API auf
- abstrahiert Konfigurierbarkeit
- liefert einen Singleton
- bequemere Servicedefinition als mit Provider API

--

### Services - c-tor Fkt
- Aufruf

```javascript
modul.service('serviceName', function(dependency[]){...});
```

- baut auf Factory-API auf
- erstellt bei jedem Aufruf einen neue Service Instance

--

### Services - Wertzuweisung
- Aufruf

```javascript
modul.value('serviceName', function(dependency[]){...});
```

- verknüft einen Wert mit einem Service
- Wert ist injezierbar
- gut geeignet für PTY
- Bsp.:

```javascript
modul.value('greeting', 'function(dependency[])'{
    return 'Hello World';
});

modul.value('greeting', 'Hello World');
```

--

### Services- Konstantendefinition
- Aufruf

```javascript
modul.constant('serviceName', function(dependency[]){...});
```

- erstellt eine Konstante als Singleton
- Konstante ist injezierbar
- Bsp.:

```javascript
modul.constant('pi', 'function(dependency[])'{
    return 3.14159265359;
});

modul.constant('pi', 3.14159265359);
```

--