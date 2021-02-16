import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public gastoEfectuado:   number = 100;
  public gastoActual:      number = 100; // ?

  public ingresoAcumulado: number = 100;
  public ingresoDisponible:number = 100;

  public inversion:        number = 100;
  public montoInvertido:   number = 100

  public data =  [ 500, 350 ];
  public label =  [ ['In', 'Store', 'Sales'], 'Mail Sales'];
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
