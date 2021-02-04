import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styles: [
  ]
})
export class DeudasComponent implements OnInit {
  
  public abonarForm: FormGroup;
  
  public data = [
    { data: [65, 59, 80, 81, 56, 55, 4], label: 'Series A' },
    { data: [ 4,  20, 40, 19, 86, 27, 9], label: 'Series B' },
    { data: [18, 48, 77, 90, 100, 27, 4], label: 'Series C' }
  ];  
  // , 
  public label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public dinero = 100;

  constructor( private _fb:FormBuilder ) { }

  ngOnInit(): void {
    this.abonarForm = this._fb.group({
      nombreDeuda: [ "", [ Validators.required ]],
      monto: [null, [ Validators.required ]]
    })
  }

  abonar(){
    console.log( this.abonarForm.value );
  }

}
