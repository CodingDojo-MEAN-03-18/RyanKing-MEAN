import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number;
  message: string;
  class: string;
  name: string;
  data;

  constructor(private dataService: DataService) { }

  onClick(name: string): void {
    console.log(name);
    this.dataService.getData(name).subscribe(data => {
      console.log(data);
      if (data) {
        this.score = data.public_repos + data.followers;
        if (this.score < 20) {
          this.message = 'Needs Work!';
          this.class = 'red';
        } else if (this.score < 50) {
          this.message = 'A decent start!';
          this.class = 'orange';
        } else if (this.score < 100) {
          this.message = 'Doing Good!';
          this.class = 'black';
        } else if (this.score < 200) {
          this.message = 'Great Job!';
          this.class = 'green';
        } else {
          this.message = 'Github Elite!';
          this.class = 'blue';
        }
      }
    }, error => {
      this.score = 0;
      this.message = 'User does not exist, pick a different Github username.';
      this.class = 'red';
    });

  }
}
