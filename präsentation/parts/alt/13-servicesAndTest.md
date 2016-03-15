## Teil 3 / Services & Tests
- Services <!-- .element: class="fragment" -->
    - Übersicht
    - Details
- Test <!-- .element: class="fragment" -->
    - Konfiguration
    - Allgemeines
    - Matchers

Note:
Mark

--



### Test - Konfiguration
- Gruntfile.js
- karma-config.js, protractor.js
- Module: karma, jasmine. protractor
- mocken von Services mit angular-mock.js
- reporting
    - Test-Reporting
    - Coverage
    - ...

--

### Test - Allgemeines
- Testen einzelner Module (Unit-Test)
- Integrative Tests (E2E)
- test suite mit

```javascript
describe('suitename', function (){...});
```

- tests mit

```javascript
it('name', function() {...});
``` 

- prüfungen mit

```javascript
expect(currenctValue).toBe(expectedValue);
``` 

- vor jedem Test: beforeEach(...);
- nach jedem Test: afterEach(...);

--

### Test - Matchers (I)
- toEqual() : Gleichheit <!-- .element: class="fragment" -->
- toBe(): Identität <!-- .element: class="fragment" -->
- toBeTruthy(), toBeFalsy(): wahr / falsch <!-- .element: class="fragment" -->
- toBeUndefined(): Ergebnis nicht definiert <!-- .element: class="fragment" -->
- toBeDefined(): Ergebnis definiert <!-- .element: class="fragment" -->
- toBeNull(): Ergebnis ist null <!-- .element: class="fragment" -->
- toContain(): Ergebnis enthält einen Wert <!-- .element: class="fragment" -->
- toThrow(): Funtion wirft einen erwarteten Fehler <!-- .element: class="fragment" -->

--

### Test - Matchers (II)
- not(): negiert den Matcher <!-- .element: class="fragment" -->
- customMatcher erweitern die vorhandenen Matcher <!-- .element: class="fragment" -->
- Beispiele für custom matchers <!-- .element: class="fragment" -->
    - toBeBetween() <!-- .element: class="fragment" -->
    - toBeLessThan() <!-- .element: class="fragment" -->
    - toBeGreaterThan() <!-- .element: class="fragment" -->

--

### Fragen ??

--

### Aufgabe:
1. Werteservice, der Talk-Array zurückgibt
2. Aufrufen des Services im Controller