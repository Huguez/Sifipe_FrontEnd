import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficaComponent } from './grafica/grafica.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [ GraficaComponent ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [ GraficaComponent ]
})
export class ComponentesModule { }
