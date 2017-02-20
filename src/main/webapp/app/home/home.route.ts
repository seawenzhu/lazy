import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { HomeComponent } from './';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  },
  canActivate: [UserRouteAccessService],
  children: [
    {
        path: 'account',
        loadChildren: '../account/account.module#DosAccountModule',
    },
    {
        // path: 'admin', children: adminState
        path: 'admin',
        loadChildren: '../admin/admin.module#DosAdminModule',
    }
]
};
