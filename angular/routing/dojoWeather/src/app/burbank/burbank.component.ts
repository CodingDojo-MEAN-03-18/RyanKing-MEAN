import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  humidity: number;
  average: number;
  high: number;
  low: number;
  status: string;
  id = 5331835;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData(this.id).subscribe(data => {
      this.humidity = data.main.humidity;
      this.average = data.main.temp;
      this.high = data.main.temp_max;
      this.low = data.main.temp_min;
      this.status = data.weather[0].description;
    });
  }
}
