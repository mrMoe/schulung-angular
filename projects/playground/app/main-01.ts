import { bootstrap }    from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <h1>Hallo {{model}}!</h1>
        <input [(ngModel)]="model"   
               [value]="model" 
               (input)="setMode($event.target.value)" 
               >
        <button (click)="setStyle('background:black;color:white;');">BUTTON</button>
        <div [style]="foo">{{barfoo}}</div>

        <template [ngIf]="isDefined">
            <ul>
                <li *ngFor="#i of array">{{i}}</li>
            </ul>

        <template>
    `
})
export class AppComponent {
    foo: String = 'background: lime;';
    barfoo: String = `was ist in ${this.foo}`;
    model: String = 'Welt';
    array = ['Thomas', 'Moritz', 'Michael'];
    isDefined = true;

    constructor() {
        setTimeout(() => this.foo = 'background: fuchsia;', 3000)
    }

    setStyle(style) {
        this.foo = style;
        window.alert('foo');
    }
}

bootstrap(AppComponent);