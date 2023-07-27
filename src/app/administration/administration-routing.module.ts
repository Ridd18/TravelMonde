import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AdminDestinationsComponent } from './admin-destinations/admin-destinations.component';
import { AdminDestinationsTreksComponent } from './admin-destinations-treks/admin-destinations-treks.component';
import { AdminDestinationsCampingComponent } from './admin-destinations-camping/admin-destinations-camping.component';
import { AdminDestinationsNationalComponent } from './admin-destinations-national/admin-destinations-national.component';
import { AdminDestinationsInternationalComponent } from './admin-destinations-international/admin-destinations-international.component';
import { TrekFilesComponent } from './trek-files/trek-files.component';
import { CampFilesComponent } from './camp-files/camp-files.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
  },
  {
    path: 'users',
    component: ViewUsersComponent,
  },
  {
    path: 'collections',
    component: AdminDestinationsComponent,
  },
  {
    path: 'collections/addTreks',
    component: AdminDestinationsTreksComponent,
  },
  {
    path: 'collections/addTreks/files',
    component: TrekFilesComponent,
  },
  {
    path: 'collections/addCamping',
    component: AdminDestinationsCampingComponent,
  },
  {
    path: 'collections/addCamping/files',
    component: CampFilesComponent,
  },
  {
    path: 'collections/addNational',
    component: AdminDestinationsNationalComponent,
  },
  {
    path: 'collections/addInternational',
    component: AdminDestinationsInternationalComponent,
  },
  {
    path: 'users/edit/:id',
    component: EditUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
