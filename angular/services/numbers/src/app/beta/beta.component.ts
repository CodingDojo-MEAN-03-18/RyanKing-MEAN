import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  betaNum: number;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  clickBeta(): void {
    this.betaNum = this._dataService.generateBeta();
  }

}
