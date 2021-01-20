import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from '../material-ui.module';



@NgModule({
  declarations: [ 
    HeaderComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialUiModule
  ],
  exports: [ HeaderComponent ]
})
export class SharedModule { }
