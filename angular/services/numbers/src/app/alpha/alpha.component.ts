import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  alphaNums: number[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  clickAlpha(): void {
    this.alphaNums = this._dataService.generateAlpha();
  }

}
