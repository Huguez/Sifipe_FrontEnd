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
import { MaterialUiModule } from '../material-ui.module';

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
    SharedModule,
    MaterialUiModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    PagesNotFoundComponent
  ]
})
export class PagesModule { }
