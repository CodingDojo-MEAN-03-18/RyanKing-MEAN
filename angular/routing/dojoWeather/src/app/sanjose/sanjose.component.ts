import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  humidity: number;
  average: number;
  high: number;
  low: number;
  status: string;
  id = 5392171;

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
