import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresosComponent } from './ingresos/ingresos.component';


const rutas:Routes = [
  { path: 'dashboard', 
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'ingresos', component: IngresosComponent }
    ] 
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( rutas ) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
