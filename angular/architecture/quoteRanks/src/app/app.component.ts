import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: Quote = new Quote;
  all_quotes: Quote[] = [];

  onSubmit(event: Event, form: NgForm) {

    console.log('submitting', form.value);
    this.all_quotes.push(this.quote);
  }
}
