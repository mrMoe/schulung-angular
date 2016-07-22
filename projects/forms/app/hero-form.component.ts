import { Component } from '@angular/core';
import { NgForm }    from '@angular/common';

import {Hero} from './hero';

@Component( {
    selector: 'hero-form',
    templateUrl: 'app/hero-form.component.html'
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[2], 'Cuch Noris');
    submitted = false;
    active = true;

    onSubmit() {
        this.submitted = true;
    }
    
    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active=true);
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }
}