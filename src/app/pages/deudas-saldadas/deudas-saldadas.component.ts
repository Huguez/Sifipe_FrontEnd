import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deudas-saldadas',
  templateUrl: './deudas-saldadas.component.html',
  styles: []
})
export class DeudasSaldadasComponent implements OnInit {
  
  public cabeza = [
    "Tipo",
    "Acreedor",
    "Monto Original",
    "Monto Final",
    "Diferencia",
    "Interes",
    "Fecha de Expedicion",
    "Fecha de Cumplimiento",
  ];

  public cuerpo = [["wawa","wawa", 100,100,100,100,'enero-2020','enero-2020']];

  public carga: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.carga = true;
  }

  prueba(){
    console.log("esto es una prueba");
  }
}
