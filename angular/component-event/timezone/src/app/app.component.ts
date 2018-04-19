import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonStates = {
    pst: false,
    mst: false,
    cst: false,
    est: false
  };

  time = Date.now();

  onClick(diff, button): void {
    this.time = Date.now() + (3600000 * diff);
    for (const i in this.buttonStates) {
      if (i) {
        this.buttonStates[i] = i === button;
      }
    }
  }
}
