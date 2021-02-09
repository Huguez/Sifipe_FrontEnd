import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule } from 'ng2-charts';
import { HistorialComponent } from './historial/historial.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [ GraficaComponent, HistorialComponent, LoadingComponent ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ GraficaComponent, HistorialComponent ]
})
export class ComponentesModule { }
