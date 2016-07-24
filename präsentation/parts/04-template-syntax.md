## Template Syntax

--

### Backticks `
- ECMAScript 2015 backticks (`)
- Nicht normale Hochkomma sondern neben dem Backspace
- Erfüllen die Aufgabe von String.format
- Kann Zeilenumbrüche
- Interpoliert Variablen im gleichen Scope

```javascript
var foo = 'bar';
var string = `
    dies ist eine ausgabe von ${foo}
`
```

--

### * und < template>
- Vereinfachte Schreibweise für Strukturele Direktiven
- Verwenden von HTML5-Templates
- Templates werden nicht angezeigt

```HTML
<li *ngIf="talk">{{ talk.name }}</li>
```
```HTML
<li template="ngIf:talk">{{ talk.name }}</li>
```
```HTML
<template [ngIf]="talk">
  <li>{{ talk.name }}</li>
</template>
```

--

### Lokale Template Variablen
- Erzeugt Variablen innerhalb des Templates
- Einfacher Zugriff auf Elemente ohne Selektoren
- Verfügbar im selben-, Sibling- oder Child-Element
- Wenn eine Direktive vorhanden ist, setzt diese den Wert ansonsten ist es das Element

```HTML
<input #name placeholder="name">
{{name.value}}
<button (click)="saveName(name.value)"
```

--

### Template Expression
- Wird im Property-Binding verwendet und an Elemente, Componenten oder Direktiven gebunden
- auf der rechten Seite vom =
- Context der Componente
- Alles was Seiteneffekte auslöst geht nicht
 - Zuweisungen =, +=, -=
 - new Operator
 - Chaining mit ; oder, 
 - Increment/decrement ++/--
 - bitwise & |

```HTML
<h1>{{ title }}</h1>
[value]=" 1 + 1 "
Elvis lebt für den Null-Check {{current?.hero?.firstName}}
```

Note:
- Schnell
- Keine Seiteneffekte
- einfache
- idempotent

--

### Template Statement
- Wird im Event-Binding verwendet und durch Ereignisse von Elementen, Componenten oder Direktiven ausgelöst
- auf der rechten Seite vom =
- Context der Componente
- Hat Seiteneffekte da Event
- hier geht auch Zuweisung; Chaining aber nicht
 - new Operator
 - Increment/decrement ++/--
 - bitwise & |

```HTML
<button (click)="setStyle('background:black;color:white')">BUTTON</h1>
```

--
 
### Data-binding
- Das Binding-Ziel ist immer im DOM und entweder ein Property oder ein Event

```HTML
<img [src] = "heroImageUrl"> Element Property
<hero-detail [hero]="currentHero"></hero-detail> Component Property
<div [ngClass] = "{selected: isSelected}"></div> Directive Property
```
```HTML
<button (click) = "onSave()">Save</button> Element event
<hero-detail (deleteRequest)="deleteHero()"></hero-detail> Component event
<div (myClick)="clicked=$event">click me</div> Directive event
```
```HTML
<input [(ngModel)]="heroName"> Event and property
```

--

### Property-Binding - One-Way IN
- Setzen von Element Eigenschaften
- Ziel-Property steht in den Eckigen-Klammern []
- zuerst wird nach nach einer Direktive gesucht dann Element-Property

```HTML
<img [src]="heroImageUrl">
<button [disabled]="isUnchanged">Cancel is disabled</button>
<div [ngClass]="classes">[ngClass] binding to the classes property</div>
<hero-detail [hero]="currentHero">kein STD-HTML mehr</hero-detail>
```

```javascript
@Component({
    selector:'hero-detail',
    template:'...'
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}
```

--

### Event-Binding - One-Way OUT
- Hören auf Element events
- Ziel-Property steht in den Runden-Klammern ()
- zuerst wird nach nach einer Direktive gesucht dann Element-Event

```HTML
<button (click)="onSave()">Save</button>
<div (myClick)="clickMessage=$event">click with myClick on the custom `MyClickDirective`</div>
<hero-detail (deleteMe)="delete($event)">kein STD-HTML mehr</hero-detail>
```

```javascript
@Component({
    selector:'hero-detail',
    template:'...'
})
export class HeroDetailComponent {
    @Output() deleteMe = new EventEmitter<Hero>();

    delete() {
        deleteMe.emit(payload);
    }
}
```

--

### ngModel - Two-Way 
- Mapping von ngModel auf @Input ngModel und @Output ngModelChange
- Spezialform von Interface 

```javascript
[(x)] -> @Input() x; @Output() xChange
```
```HTML
<input [(ngModel)]="heroName"> Event and property
<input [value]="currentHero.firstName"
  (input)="currentHero.firstName=$event.target.value">
<input
  [ngModel]="currentHero.firstName"
  (ngModelChange)="currentHero.firstName=$event">
```
