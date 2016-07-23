## Benutzer-Eingabe

--

### Binding to user input events
```HTML
<button (click)="onClickMe()">Click me!</button>
```

--

### Get user input from the $event object
```javascript
template: `
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
`

export class KeyUpComponent_v1 {
  values='';

  // with strong typing
  onKey(event:KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
```

--

### Get user input from a local template variable
```javascript
@Component({
  selector: 'loop-back',
  template:`
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }
```

--

### Key event filtering (with key.enter)
```javascript
@Component({
  selector: 'key-up3',
  template: `
    <input #box (keyup.enter)="values=box.value">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v3 {
  values='';
}
```

--

### On blur
```javascript
@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="values=box.value"
      (blur)="values=box.value">

    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v4 {
  values='';
}
```
