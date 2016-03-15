## Direktiven

--

| HTML-Tag/Attribut | Beschreibung |
| -
| ng-app        | Modul einbinden |
| ng-controller | benutzt View-Controller |
| ng-model      | HTML-Element an $scope binden |
| ng-repeat     | erstellen einer Schleife |
| ng-click      | $scope Click-Handler |

Note:
- Modularisierung
- Wiederverwendbar
- HTML wird semantisch
- Marker am DOM, die durch angular-$compile ein Element mit Verhalten erweitern oder ändern

--

### Normalisierung
HTML case-insensitive

- ng-bind (Best Practice)
- data-ng-bind (sinnvoll für HTML validating Tool)
- ng:bind
- data-ng:bind
- ng_bind
- x-ng-bind

--

### restrict
| Typ |'restrict'|Beispiel|
|-
| HTML-Element    | E        | `<my-directive></my-directive>`     |
| HTML-Attribute  | A        | `<div my-directive></div>`          |
| CSS-Class       | C        | `<div class="my-directive"></div>`  |
| HTML-Kommentar  | M        | `<!-- directive :  my-directive -->`|

Note:
- Tags und Attribute sind Best Practice
- Tags: bei neuem Element, dass Kontrolle über Template hat
- Attribut: bei Element mit Funktionalität erweitern

--

### scope
| Typ                |'scope'   |Beispiel|
|-
| parent/child       | false/true          | |
| isolated           | {}                  | |
| isolated; string   | {local:  '@myAttr'} | `<widget my-attr="hello {{name}}">`|
| isolated; binding  | {myAttr: '='}       | `<widget my-attr="parentModel">`|
| isolated; delegate | {local:  '&myAttr'} | `<widget my-attr="displayTitle()">`|

Note:
- parent: direktive nur einmal verwendbar
- unterbrechung der Vererbung

--

### Direktive statt Controller
- `$scope` isolierbar
- besser strukturierbar
- besser lesbar
- einfach mit CSS style-bar

Note:
- deklarativer
