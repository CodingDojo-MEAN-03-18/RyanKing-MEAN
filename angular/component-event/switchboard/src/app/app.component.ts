import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons = [true, true, true, true, true, true, true, true, true, true];

  onClick(idx): void {
    this.buttons[idx] = !this.buttons[idx];
  }
}
