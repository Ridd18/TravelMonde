import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsNavComponent } from './destinations-nav/destinations-nav.component';
import { DestinationsHomeComponent } from './destinations-home/destinations-home.component';
import { DestinationsTreksComponent } from './destinations-treks/destinations-treks.component';
import { DestinationsCampingComponent } from './destinations-camping/destinations-camping.component';
import { DestinationsNationalComponent } from './destinations-national/destinations-national.component';
import { DestinationsInternationalComponent } from './destinations-international/destinations-international.component';

import { FormsModule } from '@angular/forms';
import { ViewTrekComponent } from './view-trek/view-trek.component';


@NgModule({
  declarations: [
    DestinationsNavComponent,
    DestinationsHomeComponent,
    DestinationsTreksComponent,
    DestinationsCampingComponent,
    DestinationsNationalComponent,
    DestinationsInternationalComponent,
    ViewTrekComponent
  ],
  imports: [
    CommonModule,
    DestinationsRoutingModule,
    FormsModule
  ],
  exports:[FormsModule]
})
export class DestinationsModule { }
