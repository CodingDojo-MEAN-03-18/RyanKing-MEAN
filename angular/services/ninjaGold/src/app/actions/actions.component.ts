import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() building: string;
  @Output() goldUpdater = new EventEmitter();
  @Output() logUpdater = new EventEmitter();

  message: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.message = this.dataService.getMessage(this.building);
  }

  onClick(building: string) {
    this.dataService.earnGold(building);
    this.goldUpdater.emit();
    this.logUpdater.emit();
  }

}
