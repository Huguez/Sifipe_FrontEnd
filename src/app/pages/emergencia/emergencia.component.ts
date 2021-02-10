import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styles: [
  ]
})
export class EmergenciaComponent implements OnInit {
  
  public etiqueta = ['Acumulado', 'Meta Restante'];
  public datos = [7200, 21600];
  
  public meta: number;
  public juntado: number;

  public FAE: FormGroup;
  public FM: FormGroup;

  constructor( private _fb: FormBuilder ) { 
    this.meta = this.datos[1];
    this.juntado =  this.datos[0];
  }

  ngOnInit(): void {
    console.log("e");
        
    this.FAE = this._fb.group({
      monto: [ null, [ Validators.required, Validators.min(1) ] ],
      opcion: [ null, [ Validators.required ] ]
    });

    this.FM = this._fb.group({
      meses: [ 0, Validators.required ]
    });
    this.datos[1] = this.datos[1] - this.datos[0];
  }
  
  prueba(){
    console.log(this.FAE.value);
    
  }
  
  prueba2(){
    console.log(this.FM.value);
    
  }
  
}
