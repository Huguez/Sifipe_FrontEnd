import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

const uiModules = [  
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: uiModules,
  exports: uiModules
})
export class MaterialUiModule { }
