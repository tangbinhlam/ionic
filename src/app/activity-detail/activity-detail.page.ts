import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Activity } from '../domain/models/activity.model';
import { ActivityService } from '../activity.service';
import { ModalController } from '@ionic/angular';
import { ActivityVideoPage } from '../activity-video/activity-video.page';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  activity$: Observable<Activity>;

  constructor(
    private _modelController: ModalController,
    private _route: ActivatedRoute,
    private _activityService: ActivityService,
  ) {}

  ngOnInit() {
    this.activity$ = this._route.params.pipe(
      map((param) => param['id']),
      switchMap((id) => this._activityService.getActivity$(id)),
    );
  }

  async openModel(videlURL: string) {
    const modal = await this._modelController.create({
      component: ActivityVideoPage,
      componentProps: {
        videoURL: videlURL,
      },
    });
    return await modal.present();
  }
}
