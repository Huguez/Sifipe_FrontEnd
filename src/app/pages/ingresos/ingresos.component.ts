import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styles: [
  ]
})
export class IngresosComponent implements OnInit {
  
  
  public dinero: number = 750.00;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
