import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsHomeComponent } from './destinations-home/destinations-home.component';
import { DestinationsTreksComponent } from './destinations-treks/destinations-treks.component';
import { DestinationsCampingComponent } from './destinations-camping/destinations-camping.component';
import { DestinationsNationalComponent } from './destinations-national/destinations-national.component';
import { DestinationsInternationalComponent } from './destinations-international/destinations-international.component';
import { ViewTrekComponent } from './view-trek/view-trek.component';
import { ViewCampingComponent } from './view-camping/view-camping.component';
import { ViewNationalComponent } from './view-national/view-national.component';
import { ViewInternationalComponent } from './view-international/view-international.component';
import { NationalPaymentComponent } from './national-payment/national-payment.component';
import { InternationalPaymentComponent } from './international-payment/international-payment.component';
import { CampingPaymentComponent } from './camping-payment/camping-payment.component';
import { TrekPaymentComponent } from './trek-payment/trek-payment.component';
import { AuthGuard } from '../auth.guard';
import { DestinationFooterComponent } from './destination-footer/destination-footer.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationsHomeComponent,
  },
  {
    path: 'footer',
    component: DestinationFooterComponent,
  },
  {
    path: 'treks',
    component: DestinationsTreksComponent,
  },
  {
    path: 'treks/:id',
    component: ViewTrekComponent,
  },
  {
    path: 'trekPayment/:id',
    component: TrekPaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'camping',
    component: DestinationsCampingComponent,
  },
  {
    path: 'camping/:id',
    component: ViewCampingComponent,
  },
  {
    path: 'campingPayment/:id',
    component: CampingPaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'national',
    component: DestinationsNationalComponent,
  },
  {
    path: 'national/:id',
    component: ViewNationalComponent,
  },
  {
    path: 'nationalPayment/:id',
    component: NationalPaymentComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path: 'international',
    component: DestinationsInternationalComponent,
  },
  {
    path: 'international/:id',
    component: ViewInternationalComponent,
  },
  {
    path: 'internationalPayment/:id',
    component: InternationalPaymentComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationsRoutingModule { }
