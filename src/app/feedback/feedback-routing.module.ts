import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackHomeComponent } from './feedback-home/feedback-home.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: FeedbackHomeComponent,
  },
  {
    path: 'add',
    component: AddFeedbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackRoutingModule { }
