# todo

* lifecycle hooks
* attribute directives
* component style
* http client
* hierarchical injectors
* npm packages
* security
* testing
* typescript
* webpack

# ideen

## HTML

* Was ist HTML
* Historie
* Unterschied HTML und HTML5

## CSS

* Was ist CSS
* Historie
** Erste Vorschläge 1993-1995
** Dezember 1996: CSS1 Recommendation
** Mai 1998: CSS2
** Juni 2011: CSS2.1 Recommendation
** Seit 2000: Entwicklung von CSS3


### Kurze Einführung

* Aufbau der Regeln
    /* Kommentar */
    /* Optionale Angaben stehen in eckigen Klammern */
    Selektor [, Selektor, …]
    {
        Eigenschaft-1: Wert-1;
        Eigenschaft-n: Wert-n;
    }

* Selektoren: Über Selektoren werden die CSS-Eigenschaften auf bestimmte Elemente im HTML angewandt, was ein sehr mächtiges Mittel zur gezielten Gestaltung von Elementen darstellt
** __*__ Universalselektor
** __h1__ Typselektor
** __#main__ ID-Selektor
** __.header__ Klassenselektor
** __h1 a__ Child-/Inner-Selektor
** __h1 a:first-child__ erster Link
** __h1::nth-of-type(3)__ das 4te h1-Element

** __::before__ Erzeugt ein zusätzliches Element vor dem aktuellen Element: z.B. Markierung für einen externen Link, zusätzliche Handler zum ein oder ausklappen
** __::after__ Erzeugt ein zusätzliches Element nach dem aktuellen Element: z.B. ein PDF-Logo nach einem Link zu einem PDF

** __[href]__ Selektiert Elemente bei denen das Attribut _href_ existiert
** __[href=http://google.de]__ exakter Vergleich
** __[title~=google]__ Wort-Vergleich
** __[href^=http://]__ Fängt an mit
** __[href$=.pdf]__ Endet mit
** __[href*=.de/]__ Enthält

Weitere Selektoren [W3C](http://www.w3.org/TR/CSS2/selector.html#attribute-selectors)

* Eigenschaften

* Fixed(px) vs Relative(em)

* box-sizing
** margin, border, padding, width, heigth [img box]
** content-Box: Größe des Inhaltes wird definiert; kein Padding und kein Border; Icons die gleich Größe mit unterschiedlichen Rändern z.B. rechts und links
** border-Box: Größe des Rahmens wird definiert; Padding und Border werden mit in die Größe einberechnet; Alle Elemente sind exakt gleich groß; Macht Größenangaben einfacher

* float vermeiden, da immer gecleart werden muss. Besser ist z.B. _display: inline-box;_

* keine Tabellen mehr verwenden

* CSS Resets: Normalize.css

### CSS3

* Modular
* CSS Color Level 3
* CSS Namespaces
* CSS Selectors Level 3
* Media Queries

* (http://codepen.io/juliangarnier/full/idhuG)
* (https://mrdoob.github.io/three.js/examples/css3d_periodictable.html)
* (http://hakim.se/experiments/css/domtree/)

* background
** background-size
** background-origin
** mehrere Hintergründe
* Gradienten
** background: linear-gradient(direction, color-stop1, color-stop2, ...);
** background: radial-gradient(center, shape size, start-color, ..., last-color);
* Rahmens
** border-radius:25px;
** box-shadow: 10px 10px 5px #888888;
** border-image:url(border.png) 30 30 round;
* Text
** text-shadow: 5px 5px 5px #FF0000;
** word-wrap:break-word;
** @font-face{ font-family: myFirstFont; src: url(sansation_light.woff); } div{ font-family:myFirstFont; }
* Transformationen: Rotation, Skalierung, Verdrehung, Verzerrung
* Transitions: Animationen ohne Flash oder Javascript
* Spalten-Layout
** column-count:3;
** column-gap:40px;
** column-rule:4px outset #ff00ff;


* Responsive Webdesign
** Mobile first


* Übergänge und Animationen

* Präprozessoren
** Warum sollte man sie nutzen
** Welche gibt es
*** SASS
**** Vorteile von SASS
*** LESS
**** Vorteile von Less

* Frameworks
** Bootsrap
*** Vorteile
** Foundation
*** Vorteile
** Compass
*** Vorteile
*** Sprite generator
**** background, background-image, clip

* Polyfills

* Vorgehen
** Definitionen festlegen und sich daran halten (Konsequenz): Schriftgrößen, Farben, Abstände
** KISS


## Javascript

* Was ist Javascript
* Historie
* Unterschied ES4, ES5, ES6

* Das schwierige ist Konsequenz und Struktur halten, da alles Dynamisch ist

