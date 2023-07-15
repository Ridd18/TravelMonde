import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ViewUsersComponent,
    EditUsersComponent,
    
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    FormsModule
  ]
})
export class AdministrationModule { }
