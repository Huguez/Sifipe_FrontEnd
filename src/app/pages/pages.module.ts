import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Mis Modulos
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

// Mis Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesNotFoundComponent } from './404/pages-not-found.component';
import { IngresoComponent } from './ingreso/ingreso.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent,
    IngresoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent
  ]
})
export class PagesModule { }
