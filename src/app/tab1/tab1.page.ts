import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { Activity } from '../domain/models/activity.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  activities$: Observable<Activity[]>;

  constructor(private _activityService: ActivityService) {}

  ngOnInit() {
    this.activities$ = this._activityService.getActivities$();
  }
}
