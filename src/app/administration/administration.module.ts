import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { FormsModule } from '@angular/forms';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminDestinationsComponent } from './admin-destinations/admin-destinations.component';
import { SharedModule } from '../shared/shared.module';
import { AdminDestinationsNavComponent } from './admin-destinations-nav/admin-destinations-nav.component';
import { AdminDestinationsTreksComponent } from './admin-destinations-treks/admin-destinations-treks.component';
import { AdminDestinationsCampingComponent } from './admin-destinations-camping/admin-destinations-camping.component';
import { AdminDestinationsNationalComponent } from './admin-destinations-national/admin-destinations-national.component';
import { AdminDestinationsInternationalComponent } from './admin-destinations-international/admin-destinations-international.component';
import { TrekFilesComponent } from './trek-files/trek-files.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    ViewUsersComponent,
    EditUsersComponent,
    AdminNavComponent,
    AdminDestinationsComponent,
    AdminDestinationsNavComponent,
    AdminDestinationsTreksComponent,
    AdminDestinationsCampingComponent,
    AdminDestinationsNationalComponent,
    AdminDestinationsInternationalComponent,
    TrekFilesComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class AdministrationModule {}
