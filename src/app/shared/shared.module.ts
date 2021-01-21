import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '../material-ui.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [ 
    HeaderComponent, SidebarComponent 
  ],
  imports: [
    CommonModule,
    MaterialUiModule
  ],
  exports: [ HeaderComponent, SidebarComponent ]
})
export class SharedModule { }
