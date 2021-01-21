import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Input() public isMenuOpen: boolean;
  @Output() public salidaMenu = new EventEmitter<boolean>(); 

  constructor() { }

  ngOnInit(): void {
  }
  
  abrirMenu(){
    this.isMenuOpen = !this.isMenuOpen
    this.salidaMenu.emit( this.isMenuOpen );
  }

  

}
