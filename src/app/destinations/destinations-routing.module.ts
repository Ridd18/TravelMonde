import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsHomeComponent } from './destinations-home/destinations-home.component';
import { DestinationsTreksComponent } from './destinations-treks/destinations-treks.component';
import { DestinationsCampingComponent } from './destinations-camping/destinations-camping.component';
import { DestinationsNationalComponent } from './destinations-national/destinations-national.component';
import { DestinationsInternationalComponent } from './destinations-international/destinations-international.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationsHomeComponent,
  },
  {
    path: 'treks',
    component: DestinationsTreksComponent,
  },
  {
    path: 'camping',
    component: DestinationsCampingComponent,
  },
  {
    path: 'national',
    component: DestinationsNationalComponent,
  },
  {
    path: 'international',
    component: DestinationsInternationalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
