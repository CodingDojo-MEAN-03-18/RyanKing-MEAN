import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activity-log',
  templateUrl: './activity-log.component.html',
  styleUrls: ['./activity-log.component.css']
})
export class ActivityLogComponent implements OnInit {
  activities: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.activities = this.dataService.getActivities();
  }

}
