import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styles: [
  ]
})
export class EmergenciaComponent implements OnInit {
  
  public etiqueta = ['Acumulado', 'Meta Restante'];
  public datos = [];

  public FAE: FormGroup;
  public FM: FormGroup;

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
    this.datos[0] = 7200;
    this.datos[1] = 21600;

    this.FAE = this._fb.group({
      monto: [ null, [ Validators.required, Validators.min(1) ] ],
      opcion: [ null, [ Validators.required ] ]
    });

    this.FM = this._fb.group({
      meses: [ 0, Validators.required ]
    });

  }
  
  prueba(){
    console.log(this.FAE.value);
    
  }
  
  prueba2(){
    console.log(this.FM.value);
    
  }
  
}
