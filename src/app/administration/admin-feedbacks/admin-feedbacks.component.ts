import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Feedback } from 'src/app/models/feedbackModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './admin-feedbacks.component.html',
  styleUrls: ['./admin-feedbacks.component.css']
})
export class AdminFeedbacksComponent {

  public feedbacks: Feedback[];

  public feedback$:any

  selectedId: number;

  constructor(
    private service: DestinationsService,
    
  ) {}


  ngOnInit(): void {
    this.getFeedbacks(); 

   }

  public getFeedbacks(): void {
    this.service.getFeedbacks().subscribe(
      (response: Feedback[]) => {
        this.feedbacks = response;
        console.log(this.feedbacks)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteFeedback(selectedId: number): void {
    this.service.deleteFeedback(selectedId).subscribe(
      (response: void) => {
        console.log(response);
        this.getFeedbacks;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
