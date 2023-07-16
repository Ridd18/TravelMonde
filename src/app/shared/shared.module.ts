import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DestinationsNavComponent } from '../destinations/destinations-nav/destinations-nav.component';
import { DestinationsHomeComponent } from '../destinations/destinations-home/destinations-home.component';


@NgModule({
  declarations: [
    DestinationsNavComponent,
    DestinationsHomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    DestinationsNavComponent,
    DestinationsHomeComponent
  ]
})
export class SharedModule { }
