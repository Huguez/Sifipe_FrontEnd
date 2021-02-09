import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styles: [
  ]
})
export class EmergenciaComponent implements OnInit {
  
  public etiqueta = ['Acumulado', 'Meta Restante'];

  public datos = [];
  
  constructor() { }

  ngOnInit(): void {
    this.datos[0] = 7200;
    this.datos[1] = 21600;
  }
  
  

}
