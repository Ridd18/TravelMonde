import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-destinations-national',
  templateUrl: './admin-destinations-national.component.html',
  styleUrls: ['./admin-destinations-national.component.css'],
})
export class AdminDestinationsNationalComponent {
  msg = '';

  public NationalTour: NationalTour[];

  constructor(private service: DestinationsService, private router: Router) {}

  ngOnInit(): void {}

  addNationalTour(NationalTourForm: NgForm) {
    this.service.addNationalTour(NationalTourForm.value).subscribe(
      (res) => {
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/administration/collections/addNational/files']);
      },
      (err) => {
        console.log(err);
        this.msg = 'Bad Credentials';
      }
    );
  }
}
