## Daten anzeigen

--

### Interpolation
- der einfachste Weg Daten an zu zeigen
- Template hat multiline String backticks (`)

```javascript
import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
    selector:'app',
    template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{myHero}}</h2>
    `
})
export class App {
    title = 'Hello World';
    myHero = 'Mama';
} 

bootstrap(App);
```

--

### Klassen
- Klassen können geprüft werden im Gegensatz zu Strings und Objekten
- Klassen können Konstruktoren haben
- Initialisierung bei der Variablen-Deklaration bevorzugt, da nur eine Stelle
- Konstruktoren können mit Sichtbarkeit Variablen erstellen (TypeScript shortcut)

```javascript
export class Hero {
    description: string;  <-- always public!!
    constructor(
        public id:number,
        public name:string) {
        this.description = "desc";
    }
}
```

--

### Klassen
```javascript
heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
myHero = this.heroes[0];
```
```HTML
<h2>My favorite hero is: {{myHero.name}}</h2>
```

--

### ngFor-Schleife
- wiederholt das Template für jedes Objekt im übergebenen Array
- Element wird aus dem Dom entfernt

```javascript
@Component({
    template: `
        <ul>
            <li *ngFor="let talk of talks">{{ talk }}</li>
        </ul>
    `
})
export class App {
    title: string = 'Talks';
    talks: string[] = ['Java is langsam', '.net is unflexibel', 'JavaScript Rockt'];
} 
```

--

### ngIf-Bedingung
- Abhängig von der template expression wird das Element angezeigt
- Element wird aus dem Dom entfernt

```HTML
<p *ngIf="heroes.length > 3">There are many heroes!</p>
```

--

### Built-In Directives
```HTML
<div [class.special]="isSpecial">The class binding is special</div>
<div [ngClass]="setClasses()">This div is saveable and special</div>

<div [style.fontSize]="isSpecial ? 'x-large' : 'smaller'" >This div is x-large</div>
<div [ngStyle]="setStyles()">This div is italic, normal weight, and extra large (24px)</div>
```
```javascript
setClasses() {
  return {
    saveable: this.canSave,      // true
    modified: !this.isUnchanged, // false
    special: this.isSpecial,     // true
  }}

setStyles() {
  return {
    // CSS property names
    'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
    'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
  }}
```
