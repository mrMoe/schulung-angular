## Pipe operator |

- viele mitgeliefert
- chainable

```HTML
<div>{{ title | uppercase }}</div>
```
--

- eigene Pipes definieren

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'halloWelt'})
export class HalloWeltPipe implements PipeTransform {
  transform(value: string): string {
    return `Hallo ${value}!`;
  }
}
```

```
import {HalloWeltPipe} from './hallo-welt.pipe';

    template: `<h1>{{name | halloWelt}}</h1>`,
    pipes: [HalloWeltPipe]
```