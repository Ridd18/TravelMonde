import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit{

  feedbackCount: any;
  finalFeedbackCount: any;

  constructor(
    private service: DestinationsService
  ) {}

  ngOnInit(): void {
    this.getFeedbackCount()
   
  }


  
  public getFeedbackCount(): any {
    this.service.countFeedbacks().subscribe(
      (response: any) => {
        console.log(response);
        this.feedbackCount = response;
        this.finalFeedbackCount = JSON.stringify(this.feedbackCount[0].feedbackCount);

        console.log(this.finalFeedbackCount);

        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
