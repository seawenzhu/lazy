import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { navbarRoute } from '../app.route';
import { errorRoute } from './';
import { HomeComponent } from '../home/home.component';
import { JhiMainComponent } from './main/main.component';
import { UserRouteAccessService } from '../shared';

let LAYOUT_ROUTES = [
    navbarRoute,
    ...errorRoute,
    // {
      // path: '',
      // component: JhiMainComponent,
      // children: [
          // {
          //       path: '', redirectTo: 'home', pathMatch: 'full'
          // },
          {
            path: '',
            component: HomeComponent,
            data: {
              authorities: [],
              pageTitle: 'home.title'
            },
            canActivate: [UserRouteAccessService]
          },
          {
              path: 'account',
              loadChildren: '../account/account.module#LazyAccountModule',
          },
          {
              // path: 'admin', children: adminState
              path: 'admin',
              loadChildren: '../admin/admin.module#LazyAdminModule',
          }
      // ]
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule {}
