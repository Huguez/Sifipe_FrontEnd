import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inversiones',
  templateUrl: './inversiones.component.html',
  styles: []
})
export class InversionesComponent implements OnInit {

  public data =  [30, 15, 20, 15, 20];
  public label =  ['VOO', 'VEA', 'VNQ', 'CETES', 'fibras' ];
  

  public cabecera = ['Periodo', 'I1' , 'I2' , 'I3' , 'Total'];
  public cuerpo = [[ 'enero-2020', 750.00,750.00,750.00, 750.00 ]];
  
  public inversionForm:FormGroup;

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
    this.inversionForm = this._fb.group( {
      categoria: new FormControl( null, [ Validators.required ] ),
      subCategoria: new FormControl( null, [ Validators.required ] ),
      monto: new FormControl( null, [ Validators.required, Validators.min( 1.0 ) ] )
    } );
  }

  ingresarInversion(){
    console.log( this.inversionForm.value );
    
  }
  
  prueba(){
    
  }
}
