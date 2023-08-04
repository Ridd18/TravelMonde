import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackHomeComponent } from './feedback-home/feedback-home.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeedbackHomeComponent,
    AddFeedbackComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeedbackModule { }
