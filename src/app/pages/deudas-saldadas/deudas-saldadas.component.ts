import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deudas-saldadas',
  templateUrl: './deudas-saldadas.component.html',
  styles: [
  ]
})
export class DeudasSaldadasComponent implements OnInit {
  
  public fecha:Date = new Date();
  public a: number = 0.259;
  public b: number = 130;

  public carga: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.carga = true;
  }

  prueba(){
    console.log("esto es una prueba");
  }
}
