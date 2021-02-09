import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Mis Modulos
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentesModule } from '../components/componentes.module';

// Mis Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesNotFoundComponent } from './404/pages-not-found.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { GastosComponent } from './gastos/gastos.component';
import { DeudasComponent } from './deudas/deudas.component';
import { DeudasSaldadasComponent } from './deudas-saldadas/deudas-saldadas.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';
import { RetiroComponent } from './retiro/retiro.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent,
    IngresosComponent,
    GastosComponent,
    DeudasComponent,
    DeudasSaldadasComponent,
    EmergenciaComponent,
    RetiroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent,
    IngresosComponent
  ]
})
export class PagesModule { }
