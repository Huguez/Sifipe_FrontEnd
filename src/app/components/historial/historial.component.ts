import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: [
  ]
})
export class HistorialComponent implements OnInit {

  @Input() public header:[];
  @Input() public body:[];
  
  public fecha:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }
  
  prueba(){
    console.log("esto es una prueba");
  }
  
  getTipo( item ){
    if( typeof item == 'string' ){
      
      let fecha = Date.parse( item ); // NaN si no es fecha, numero si es fecha
      
      if( !isNaN( new Date( fecha ).getTime() ) ) {
        return 'fecha';
      }else{
        return 'string';
      }
    }
    return typeof item;
  }
}
