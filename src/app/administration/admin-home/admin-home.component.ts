import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  TrekCount: any;
  finalTrekCount: any;
  CampingCount: any;
  finalCampingCount: any;
  NationalCount: any;
  finalNationalCount: any;
  InternationalCount: any;
  finalInternationalCount: any;
  total: any;
  finalTotal: any;

  userCount: any;
  finalUserCount: any;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private userService: AuthService
  ) {}

  ngOnInit() {
    this.getTrekCount();
    this.getCampingsCount();
    this.getNationalCount();
    this.getInternationalCount();
    this.getUsersCount()
  }

  public getTrekCount(): any {
    this.service.countTreks().subscribe(
      (response: any) => {
        console.log(response);
        this.TrekCount = response;
        this.finalTrekCount = JSON.stringify(this.TrekCount[0].TrekCount);

        console.log(this.finalTrekCount);

        this.total = parseInt(this.finalTrekCount);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCampingsCount(): any {
    this.service.countCampings().subscribe(
      (response: any) => {
        console.log(response);
        this.CampingCount = response;
        this.finalCampingCount = JSON.stringify(
          this.CampingCount[0].CampingCount
        );

        console.log(this.finalCampingCount);

        this.total = this.total + parseInt(this.finalCampingCount);
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNationalCount(): any {
    this.service.countNationalTours().subscribe(
      (response: any) => {
        console.log(response);
        this.NationalCount = response;
        this.finalNationalCount = JSON.stringify(
          this.NationalCount[0].NationalTourCount
        );

        console.log(this.finalNationalCount);

        this.total = this.total + parseInt(this.finalNationalCount);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getInternationalCount(): any {
    this.service.countInternationalTours().subscribe(
      (response: any) => {
        console.log(response);
        this.InternationalCount = response;
        this.finalInternationalCount = JSON.stringify(
          this.InternationalCount[0].InternationalTourCount
        );

        console.log(this.finalInternationalCount);

        this.total = this.total + parseInt(this.finalInternationalCount);

        this.finalTotal = this.total;

        console.log('final total of all tours', this.finalTotal);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getUsersCount(): any {
    this.userService.countUsers().subscribe(
      (response: any) => {
        console.log(response);
        this.userCount = response;
        this.finalUserCount = JSON.stringify(this.userCount[0].UserCount);

        console.log(this.finalUserCount);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
