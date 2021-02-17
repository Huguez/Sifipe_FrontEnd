import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  @Input() public showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // document.getElementById("sidebar").style.width = "19%";
  }
  
}
