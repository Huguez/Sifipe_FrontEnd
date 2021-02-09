import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: [
  ]
})
export class HistorialComponent implements OnInit {

  @Input() public header:[];
  @Input() public lista:[];
  
  public fecha:Date = new Date();
  

  constructor() { }

  ngOnInit(): void {
  }
  
  prueba(){
    console.log("esto es una prueba");
  }

}
