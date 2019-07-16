import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [LayoutComponent, TopnavComponent, SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
  ]
})
export class LayoutModule { }
