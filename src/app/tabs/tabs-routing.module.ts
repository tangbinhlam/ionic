import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
          {
            path: 'activity-detail/:id',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../activity-detail/activity-detail.module').then(
                    (m) => m.ActivityDetailPageModule,
                  ),
              },
              // {
              //   path: 'activity-video',
              //   loadChildren: () =>
              //     import('../activity-video/activity-video.module').then(
              //       (m) => m.ActivityVideoPageModule,
              //     ),
              // },
            ],
          },
        ],
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
