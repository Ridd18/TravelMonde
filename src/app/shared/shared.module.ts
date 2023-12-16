import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DestinationsNavComponent } from '../destinations/destinations-nav/destinations-nav.component';
import { DestinationsHomeComponent } from '../destinations/destinations-home/destinations-home.component';
import { DestinationFooterComponent } from '../destinations/destination-footer/destination-footer.component';


@NgModule({
  declarations: [
    DestinationsNavComponent,
    DestinationsHomeComponent,
    DestinationFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    DestinationsNavComponent,
    DestinationsHomeComponent,
    DestinationFooterComponent
  ]
})
export class SharedModule { }
