import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  humidity: number;
  average: number;
  high: number;
  low: number;
  status: string;
  id = 4366164;

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
