import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
