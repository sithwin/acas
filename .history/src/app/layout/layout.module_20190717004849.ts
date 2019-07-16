import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [LayoutComponent, TopnavComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule
  ]
})
export class LayoutModule { }
