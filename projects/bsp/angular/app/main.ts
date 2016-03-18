import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector:'app',
    template: `
        <label>Name:</label>
        <input type="text" [(ngModel)]="yourName" placeholder="Enter a name here" value="bob">
        <h1>Hello {{yourName}}!</h1>
    `
})
export class App {
} 

bootstrap(App);
