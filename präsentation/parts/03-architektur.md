## Architektur

--

![overview2](images/overview2.png)

--

### Module
- angular ist modular
- jede Datei ist ein Modul
- ein Modul exportiert Funktionalität/Klasse/Wert, die von anderen verwendet werden kann
- Module können zu Bibliotheken zusammengeschlossen werden

```javascript
app.component.ts
export class AppComponent { }
```
```javascript
import {AppComponent} from './app.component';
```
```javascript
import {Component, provide} from '@angular/core';
import {Router} from '@angular/router';
```

--

### Component
- Herscher über einen Seitenbereich
- ehemals Direktiven
- Verbinden Template, Style, Daten, Logik, Routing...
- Haben einen Lifecycle (asp.net anyone?^^)

```javascript
export class TalkListComponent implements OnInit {
    constructor(private _talkService: TalkService){}
    
    talks: Talk[] = [];
    error: string;
    search = { id: null, title: null, caption: null, speaker: {name: null}};

    ngOnInit() {
        this._talkService.getTalks().subscribe(
            t => this.talks.push(t),
            e => this.error = e);
    }
}
```

--

### Template
- Aussehen einer Komponente
- wird bei größeren Templates in extra Datei hinterlegt
- Auslagern hängt am eigenen Geschmak und an der Policy
  (steigert Lesbarkeit und trennt Markup von Funktionalität)
- Kein Unterschied im Zugriff auf die Elemente

```javascript
<tr *ngFor="let talk of talks | filter:search">
    <th scope="row"><a [routerLink]="['/talk-detail', talk.id.toLowerCase()]">{{talk.id}}</a></th>
    <td>{{talk.title}}</td>
    <td>{{talk.caption}}</td>
    <td>{{talk.speaker.name}}</td>
</tr>
```

--

### Metadata
- Anweisungen wie angular eine Klasse zu erstellen hat
- Ohne Metadata weiß angular nicht was zu tun ist
- selector: Marker an dem eine neue Komponente erstellt werden soll
- template/templateUrl: Template oder Adresse
- directives: Direktiven, die von dieser Komponente verwendet werden
- providers: Verwendete Services die injected werden sollen

```javascript
@Component({
    selector: 'talk-app'
    template: `
        ...
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TalkService]
})
export class AppComponent implements OnInit { ...   }
```

--

### Data Binding
Es gibt 4 Arten von DataBinding:
- Interpolation: Anzeige von Daten im Template
- Property Binding: füllt ein Element Property mit Daten
- Event Binding: Gibt der Componente User-Daten zurück
- Two-Way Binding: Füllt den Inhalt mit Werten aus dem Model und transportiert Änderungen zurück
- alles außer Interpolation hat Ziel

```javascript
{{talk.name}}              interpolation    Component > Template
[value]="model.alterEgo"   property Binding  Component > Template
value="{{model.alterEgo}}" property Binding  Component > Template
(click)="send($event)"     event Binding    Component < Template
[(ngModel)]="model.name"   two-way Binding  Component <> Template
```

--

### Data Binding
- Binding geht nicht auf Attribute sondern auf DOM-Element-Properties
- Mit Attributen wird nur das Element initialisiert
- Attribute werden durch HTML definiert; Properties durch DOM
- Änderungen im Binding werden nicht ins HTML übertragen
- id hat 1:1 Mapping
- colspan hat kein DOM-Mapping
- textContent hat kein HTML-Mapping

```HTML
<button [disabled]="isUnchanged">Save</button>
<input type="text" value="Bob">
```

--

### Directive
- Struktur-Direktiven verändern das Layout
- Attribut-Direktiven verändern das Verhalten
- Component's sind eigentlich spezielle Struktur-Direktiven
- Anhand des Component-selector werden neue Componenten erstellt
- Das macht der angular Injector; kein Erstellen von Hand
- Präfixe

```javascript
<body>
    <talk-app></talk-app>
</body>
<div *ngFor="let hero of heroes"></div>
<hero-detail *ngIf="selectedHero"></hero-detail>
<input [(ngModel)]="hero.name">
```

--

### Service
- Alles was nicht explizit eine Component ist ein Service
- Erledigen alle Aufgaben, die nicht eine View haben
- werden als Provider in Component's registriert
- Hat eine enge, definierte Aufgabe
 - logging
 - Datenhandling

```javascript
export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
} 
```

--

### Dependencies

```javascript
var elements = new Array();
```
```javascript
var username = 'Max Mustermann';
var MyController = function() {
    console.out(username);
}
```
```javascript
var MyController = function(username) {
    console.out(username);
}
```

Note:
- new und global > tight coupeling
- schwer testbar, wiederverwendbar, änderbar
- Abhänigkeiten müssen vom Ersteller der Komponente aufgelöst werden

--

### Dependency Injection
- Zentrale Verwaltung von Instanzen
- Erfüllen von Abhängigkeiten
- Komponente bekommt Abhängigkeiten übergeben
- Registrierung aller Komponenten (controller, services, directives, filters...)

```javascript
@Component({
    providers: [TalkService]
})
export class TalkListComponent implements OnInit {
    constructor(private _talkService: TalkService){}
```

Note:
- Design-Pattern zur Verwaltung von Abhängigkeiten
- der Injector erstellt alle Objekte und kann dadurch Abhängigkeiten erfüllen
- Im $injector wird Bauplan hinterlegt > moduldefinition
