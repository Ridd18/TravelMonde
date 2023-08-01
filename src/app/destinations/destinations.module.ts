import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsTreksComponent } from './destinations-treks/destinations-treks.component';
import { DestinationsCampingComponent } from './destinations-camping/destinations-camping.component';
import { DestinationsNationalComponent } from './destinations-national/destinations-national.component';
import { DestinationsInternationalComponent } from './destinations-international/destinations-international.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTrekComponent } from './view-trek/view-trek.component';
import { ViewCampingComponent } from './view-camping/view-camping.component';
import { ViewNationalComponent } from './view-national/view-national.component';
import { ViewInternationalComponent } from './view-international/view-international.component';
import { SharedModule } from '../shared/shared.module';

import { RatingModule } from 'ngx-bootstrap/rating';

@NgModule({
  declarations: [
    // DestinationsNavComponent,
    // DestinationsHomeComponent,
    DestinationsTreksComponent,
    DestinationsCampingComponent,
    DestinationsNationalComponent,
    DestinationsInternationalComponent,
    ViewTrekComponent,
    ViewCampingComponent,
    ViewNationalComponent,
    ViewInternationalComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    FormsModule,
    SharedModule,
    RatingModule,
    ReactiveFormsModule
  ],
  exports:[FormsModule]
})
export class DestinationsModule { }
