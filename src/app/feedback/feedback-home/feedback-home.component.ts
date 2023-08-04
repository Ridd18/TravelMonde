import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Feedback } from 'src/app/models/feedbackModel';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-feedback-home',
  templateUrl: './feedback-home.component.html',
  styleUrls: ['./feedback-home.component.css']
})
export class FeedbackHomeComponent {

  public feedbacks: Feedback[];

  public feedback$:any

  selectedId: number;

  constructor(
    private service: DestinationsService,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.getFeedbacks(); 

    this.feedback$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getFeedbacks();
      })
    );

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

}
