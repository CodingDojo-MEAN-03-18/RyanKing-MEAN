import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnChanges {
  @Input() power: number;
  @Input() multiplier: number;

  constructor() { }
  ngOnInit() { }
  ngOnChanges() {
    // set power to 100 if input is greater than 100
    this.power = this.power > 100 ? 100 : this.power;
  }
}
