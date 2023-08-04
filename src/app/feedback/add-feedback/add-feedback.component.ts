import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit{


  msg : string;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  
  ngOnInit(): void {
    
  }

  addFeedback(addFeedbackForm: NgForm) {
    this.service.addFeedback(addFeedbackForm.value).subscribe(
      (res) => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/feedback']);
      },
      (err) => {
        console.log(err);
        this.msg = 'Bad Credentials';
      }
    );
  }

 
}
