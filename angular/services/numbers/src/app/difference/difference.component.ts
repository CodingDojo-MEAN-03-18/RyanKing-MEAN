import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-difference',
  templateUrl: './difference.component.html',
  styleUrls: ['./difference.component.css']
})
export class DifferenceComponent implements OnInit {
  differenceNum: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  clickDiff(): void {
    this.differenceNum = this._dataService.generateDifference();
  }

}
