import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const rutas:Routes = [
  { path: 'dashboard', 
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent }
    ] 
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( rutas ) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
