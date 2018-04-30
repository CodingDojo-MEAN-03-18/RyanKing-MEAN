import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  humidity: number;
  average: number;
  high: number;
  low: number;
  status: string;
  id = 4887398;

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
