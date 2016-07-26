import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
    <input [(ngModel)]="data" type="text" >
    {{data}}

    <!-- asödlkfjas-->
    <input [value]="foo" (input)="update($event.target.value)" type="text" >
    {{foo}}
  `
})
export class AppComponent {
  data: String = 'Welt';
  foo: String = 'bar';

  update(value) {
    console.log(value);
    this.foo = value;
  }
}
