import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesNotFoundComponent } from './pages/404/pages-not-found.component';

import { PagesRoutingModule } from './pages/pages-routing.module';

const rutas: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'  },
  { path: '**', component: PagesNotFoundComponent   }
];

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(rutas, { relativeLinkResolution: 'legacy' }), 
    PagesRoutingModule 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
