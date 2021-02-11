import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styles: [
  ]
})
export class IngresosComponent implements OnInit {
  
  public data =  [300, 500, 100];
  public dinero: number = 750.00;
  public label =  [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  
  public cabecera = ['Periodo', 'I1' , 'I2' , 'I3' , 'Total'];
  public cuerpo = [[ 'enero-2020', 750.00,750.00,750.00, 750.00 ]];

  constructor(){}

  ngOnInit(): void {
  }

}
