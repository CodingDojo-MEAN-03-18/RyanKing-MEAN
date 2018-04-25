import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold: number;

  constructor(private dataService: DataService) {
    this.gold = dataService.getGold();
  }
  updateGold() {
    this.gold = this.dataService.getGold();
  }
}
