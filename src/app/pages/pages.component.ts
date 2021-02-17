import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['pages.component.css']
})
export class PagesComponent implements OnInit {
  
  public abrirMenu: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  revisarMenu( event ){
    this.abrirMenu = event;
    
    document.getElementById("contenedor").style.marginLeft = this.abrirMenu ? "300px" :" 10px" ;
    
  }

}
