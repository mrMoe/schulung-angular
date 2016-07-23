## What's with the Fuzz

-- 

### Javascript Sucks
- Skurrile Scoping-Regeln (var vergessen -> globale Variable)
- Dynamische Sprache: <i style="color:blue;">this</i> ändert sich dauernd
- hat keine Klassen
- schlechte Tool-Unterstützung
```javascript
var foo = [0]; foo == foo; foo == !foo;
Math.min() < Math.max()
typeof null
undefined == null
equality === 
equality == 
String("abc") instanceof String 
1000 === 1E3
```
- WTF's <a href="http://jswtf.tumblr.com/">jswtf.tumblr.com</a>
- hilarious WAT-Talk Gary Bernhardt https://www.destroyallsoftware.com/talks/wat

Note:
- denial, anger, bargaining, depression
- equality == -> try to compare anything with everything and mostly take true
- (new String("abc")) instanceof String

--

### Stockholm syndrom

- JS everywhere
- Full Stack
    - J2V8 ... D‑':
- Server node.js
 - Audio/video -  www.youtube.com
 - <a href="http://stars.chromeexperiments.com/" target="_blank">3D</a> - stars.chromeexperiments.com, threejs.org
 - Datenbank - postgreSQL, NoSQL
 - <a href="http://www.quakejs.com/play?set%20fs_game%20cpma&set%20mode_start%20FFA&set%20g_teamAutoJoin%201&map%20cpm1a" target="_blank">Spiele</a>

--

### AngularJS — Superheroic JavaScript MVW Framework
- GetAngular von Misko Hevery (google) 2009
- WebApp von 17000 Zeilen und 6 MM
- Konvertiert in 3 Wochen in 1000 Zeilen
- Open-Source JavaScript-Framework für WebApps und Single-Page-Applications (SPA)
- Lizenz: MIT, damit in kommerziellen Produkten verwendbar

--

### magic driven development
- Two-Way-Data-Binding
- Dependency Injection
- Templating 
- Form validation
- Routing
- Wiederverwendbarkeit
- Testbarkeit
- Entwickelt für CRUD (CREATE, READ, UPDATE, DELETE)

Note:
- Alle Aufgaben in einem Framework
- Vereinfachung durch mehr Abstraktion
- Nicht gedacht für heavy DOM-Manipulation (Games, Editoren)
- Testbarkeit erhöht Zuverlässigkeit und Wiederverwendbarkeit

--

### Vorteile
- Logik von DOM-Manipulationen entkopeln
- Client unabhängig vom Server
- reduziert Callbacks
- vereinfachte DOM-Manipulation
- übliche Aufgaben automatisieren

Note:
- Erhöht Testarkeit, Wartbarkeit
- Entwickeln gegen Contracts; Paralleles Arbeiten an Client und Server
- Reduktion Callbacks durch deklaratives Entwickeln
- DOM Ändnerung programmatisch nicht mehr mit jQuery-Selectoren > vorhersehbar, testbar
- Boilerplate entfernen da alltäglich, nur noch Logik übrig lassen

--

### die Anderen im Sandkasten
|            | Binding       | Componenten       | Routing                 |
|- 
| AngularJS  | dirty check   | HTML Tag          | Template and Controller |
| BackboneJS | -             | Mixin             | Template and Controller |
| EmberJS    | callback      | HTML Tag; UI only | Convention              |
| React      | state machine | Mixin             | -                       |

https://www.airpair.com/js/javascript-framework-comparison#3-community <!-- .element: class="reference" -->

Note:
- Callbacks: update every single call
- DirtyChecking: multiple properties update
- React: eigentlich eher eine View als Controller oder Model
- Backbone; no UI binding, bad routing
- Ember: no reuse of Controller
- Angular
    - einfaches Databinding, mixins, extends
    - klares routing
    - Erweiterung von HTML durch Tags
    - Ausgelegt auf CRUD

--

### Why angular2?

- edgy use cases $apply, $digest, $timeout
- aufwändiger digest loop; teilweise recursiv -> zone.js
- Binding checks in native code aus JIT^^
- vermeidet tree scanning: Observable Pattern, immutable.js (Facebook)
- lazy-loading von Komponenten :D
- nur ein DI Mechanismus: constructor

http://blog.angular-university.io/introduction-to-angular2-the-main-goals/ <!-- .element: class="reference" -->

--

### Why angular2?

- Bessere Integration in Web-Components: keine plain Attribute -> [src]
- Support/Emulate Shadow-DOM
- Server-Side-Rendering mit Angular Universal
- besser testbar
- Migrations-Pfad

http://blog.angular-university.io/introduction-to-angular2-the-main-goals/ <!-- .element: class="reference" -->

--

### Aufbau der Schulung
- nur TypeScript
- Was gibt's in Angular (oder: Die graue Theorie)
- Erste Schritte (oder: Wer hat's verstanden?)
- Sleeves Up; Anbindung an Datendienste
- Demo-Anwendung und was uns so einfällt
- eat, sleep, hack, repeat^^

--

![learning curves](images/js-learning-curves.jpeg) 
