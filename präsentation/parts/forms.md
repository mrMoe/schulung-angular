## Forms

- Template-Driven Forms
- Create a Form component
- Add Powers with *ngFor
- Two-way data binding with *ngModel
- Track change-state and validity with ngControl
- Add Custom CSS for Visual Feedback
- Show and Hide Validation Error messages
- Add a hero and reset the form
- Submit the form with ngSubmit
- Toggle two form regions 

--

```javascript
import {Component} from '@angular/core';
import {NgForm}    from '@angular/common';
import { Hero }    from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
```
