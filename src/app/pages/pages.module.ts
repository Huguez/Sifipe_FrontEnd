import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesNotFoundComponent } from './404/pages-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    PagesComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
