import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { DeudasComponent } from './deudas/deudas.component';
import { DeudasSaldadasComponent } from './deudas-saldadas/deudas-saldadas.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { RetiroComponent } from './retiro/retiro.component';
import { InversionesComponent } from './inversiones/inversiones.component';


const rutas:Routes = [
  { path: 'dashboard', 
    component: PagesComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'ingresos', component: IngresosComponent },
      { path: 'gastos', component: GastosComponent },
      { path: 'deudas', component: DeudasComponent },
      { path: 'deudasSaldadas', component: DeudasSaldadasComponent },
      { path: 'emergencia', component: EmergenciaComponent },
      { path: 'retiro', component: RetiroComponent },
      { path: 'inversiones', component: InversionesComponent },
      

    ] 
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(rutas, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
