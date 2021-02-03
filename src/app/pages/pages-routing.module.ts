import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { DeudasComponent } from './deudas/deudas.component';
import { DeudasSaldadasComponent } from './deudas-saldadas/deudas-saldadas.component';


const rutas:Routes = [
  { path: 'dashboard', 
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'gastos', component: GastosComponent },
      { path: 'deudas', component: DeudasComponent },
      { path: 'deudasSaldadas', component: DeudasSaldadasComponent}
      
    ] 
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( rutas ) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
