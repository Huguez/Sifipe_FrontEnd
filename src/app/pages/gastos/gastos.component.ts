import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styles: [
  ]
})
export class GastosComponent implements OnInit {
  
  public gastoForm: FormGroup;

  public data = [ { data: [65, 59, 49, 41, 56, 55, 55, 65, 59, 51, 48, 56], label: 'mes - año' } ];
  // , 
  public label = ['Vivienda', 'Comida', 'Transporte', 'Impuestos & Donaciones', 'Seguros', 'Ahorros', 'Salud', 'Servicios', 'Recreacion', 'Vestimenta', 'Deudas', 'Personal' ];
  
  public dinero = 100;

  public subcategoriaAux = [ 'Hipoteca Uno/Renta', 'Hipoteca Dos', 'Impuestos de vivienda', 'Reparaciones/Mantenimiento', 'Gastos de administración' ];

  constructor( private _fb:FormBuilder ) { }

  ngOnInit(): void {

    this.gastoForm = this._fb.group({
      categoria: [ "", [ Validators.required ] ],
      subCategoria: [ "", [ Validators.required ] ], // 
      monto: [ null, Validators.required ]
    });


  }

  Ingresargasto(){
    console.log( this.gastoForm.value );
  }

  pueba(){
    let subcategoria = document.getElementById('subCategoria');
    
    while( 0 < subcategoria.childNodes.length ){
      subcategoria.removeChild( subcategoria.firstChild );
    }
    
    
    if( this.gastoForm.value.categoria == "Vivienda" ){
      
      for( let element in  this.subcategoriaAux ) {
        
        let opt = document.createElement('option');
        opt.value = this.subcategoriaAux[element];
        opt.innerHTML = this.subcategoriaAux[element];

        subcategoria.appendChild( opt );
      }
    }
   }
   
}
