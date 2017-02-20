import './vendor.ts';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { LazySharedModule, UserRouteAccessService } from './shared';
import { LazyHomeModule } from './home/home.module';
import { LazyAdminModule } from './admin/admin.module';
import { LazyAccountModule } from './account/account.module';
import { LazyEntityModule } from './entities/entity.module';

import { LayoutRoutingModule } from './layouts';
import { PaginationConfig } from './blocks/config/uib-pagination.config';


import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
      NgbModule.forRoot(),
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        LazySharedModule,
        LazyHomeModule,
        // LazyAdminModule,
        // LazyAccountModule,
        LazyEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        { provide: Window, useValue: window },
        { provide: Document, useValue: document },
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class LazyAppModule {}
