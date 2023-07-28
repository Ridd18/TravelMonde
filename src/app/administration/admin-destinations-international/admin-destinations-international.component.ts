import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-destinations-international',
  templateUrl: './admin-destinations-international.component.html',
  styleUrls: ['./admin-destinations-international.component.css'],
})
export class AdminDestinationsInternationalComponent {
  msg = '';

  public InternationalTour: InternationalTour[];

  constructor(private service: DestinationsService, private router: Router) {}

  ngOnInit(): void {}

  addInternationalTour(InternationalTourForm: NgForm) {
    this.service.addInternationalTour(InternationalTourForm.value).subscribe(
      (res) => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/administration/collections/addInternational/files']);

      },
      (err) => {
        console.log(err);
        this.msg = 'Bad Credentials';
      }
    );
  }
}
