import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DestinationsService } from 'src/app/services/destinations.service';
import { ChartType } from 'chart.js/auto';
import { trekRating } from 'src/app/models/trekRatingModel';
import { campingRating } from 'src/app/models/campingRatingModel';
import { nationalRating } from 'src/app/models/nationalRatingModel';
import { internationalRating } from 'src/app/models/internationalRatingModel';

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

  feedbackCount: any;
  finalFeedbackCount: any;

  TrekPayment: any;
  finalTrekPayment: any;
  CampingPayment: any;
  finalCampingPayment: any;
  NationalPayment: any;
  finalNationalPayment: any;
  InternationalPayment: any;
  finalInternationalPayment: any;
  totalPayment: any;
  finalTotalPayment: any;

  public trekRatings: trekRating[];
  public campRatings: campingRating[];
  public nationalRatings: nationalRating[];
  public internationalRatings: internationalRating[];

  constructor(
    private service: DestinationsService,
    private userService: AuthService
  ) {}

  ngOnInit() {
    this.getTrekCount();
    this.getCampingsCount();
    this.getNationalCount();
    this.getInternationalCount();

    this.getUsersCount();

    this.getAllTrekRatings();
    this.getAllCampRatings();
    this.getAllNationalRatings();
    this.getAllInternationalRatings();

    this.getFeedbackCount();

    this.getTrekPayment();
    this.getCampingsPayment();
    this.getNationalPayment();
    this.getInternationalPayment();
  }

  public pieChartType: ChartType = 'pie';
  public pieChartLabels: string[] = [];
  public pieChartData: any[] = [];
  public pieChartLegend: boolean = true;

  public pieChartTypeCamp: ChartType = 'pie';
  public pieChartLabelsCamp: string[] = [];
  public pieChartDataCamp: any[] = [];
  public pieChartLegendCamp: boolean = true;

  public pieChartTypeNational: ChartType = 'pie';
  public pieChartLabelsNational: string[] = [];
  public pieChartDataNational: any[] = [];
  public pieChartLegendNational: boolean = true;

  public pieChartTypeInternational: ChartType = 'pie';
  public pieChartLabelsInternational: string[] = [];
  public pieChartDataInternational: any[] = [];
  public pieChartLegendInternational: boolean = true;

  public getAllTrekRatings(): void {
    this.service.getTrekAverageRatings().subscribe(
      (response: any[]) => {
        this.trekRatings = response;

        // const ratings = response.map((item) => parseFloat(item.avg));
        // const labels = response.map((item) => `Trek ${item.trek_id}`);
        const labels = response.map((item) => ` ${item.trek_name}`);

        const chartData = {
          data: response.map((item) => parseFloat(item.avg)),
        };
        this.pieChartData = [chartData];

        this.pieChartLabels = labels;
        // this.pieChartData = ratings;

        console.log(this.pieChartLabels);
        console.log(this.pieChartData);

        console.log(this.trekRatings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllCampRatings(): void {
    this.service.getCampingAverageRatings().subscribe(
      (response: any[]) => {
        this.campRatings = response;

        // const ratings = response.map((item) => parseFloat(item.avg));
        const labels = response.map((item) => ` ${item.camping_name}`);

        const chartData = {
          data: response.map((item) => parseFloat(item.avg)),
        };
        this.pieChartDataCamp = [chartData];

        this.pieChartLabelsCamp = labels;
        // this.pieChartData = ratings;

        console.log(this.pieChartLabelsCamp);
        console.log(this.pieChartDataCamp);

        console.log(this.campRatings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllNationalRatings(): void {
    this.service.getNationalAverageRatings().subscribe(
      (response: any[]) => {
        this.nationalRatings = response;

        // const ratings = response.map((item) => parseFloat(item.avg));
        const labels = response.map(
          (item) => ` ${item.national_name}`
        );

        const chartData = {
          data: response.map((item) => parseFloat(item.avg)),
        };
        this.pieChartDataNational = [chartData];

        this.pieChartLabelsNational = labels;
        // this.pieChartData = ratings;

        console.log(this.pieChartLabelsNational);
        console.log(this.pieChartDataNational);

        console.log(this.nationalRatings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllInternationalRatings(): void {
    this.service.getInternationalAverageRatings().subscribe(
      (response: any[]) => {
        this.internationalRatings = response;

        // const ratings = response.map((item) => parseFloat(item.avg));
        const labels = response.map((item) => ` ${item.international_name}`);

        const chartData = {
          data: response.map((item) => parseFloat(item.avg)),
        };
        this.pieChartDataInternational = [chartData];

        this.pieChartLabelsInternational = labels;
        // this.pieChartData = ratings;

        console.log(this.pieChartLabelsInternational);
        console.log(this.pieChartDataInternational);

        console.log(this.internationalRatings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public getFeedbackCount(): any {
    this.service.countFeedbacks().subscribe(
      (response: any) => {
        console.log(response);
        this.feedbackCount = response;
        this.finalFeedbackCount = JSON.stringify(
          this.feedbackCount[0].feedbackCount
        );

        console.log(this.finalFeedbackCount);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTrekPayment(): any {
    this.service.sumOfTrekPayments().subscribe(
      (response: any) => {
        console.log(response);
        this.TrekPayment = response;
        this.finalTrekPayment = (this.TrekPayment[0].TrekSum);

        console.log(this.finalTrekPayment);

        this.totalPayment = parseInt(this.finalTrekPayment);
        console.log(' total payment of all tours', this.totalPayment);
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCampingsPayment(): any {
    this.service.sumOfCampPayments().subscribe(
      (response: any) => {
        console.log(response);
        this.CampingPayment = response;
        this.finalCampingPayment = (this.CampingPayment[0].CampingSum);

        console.log(this.finalCampingPayment);

        this.totalPayment =
          this.totalPayment + parseInt(this.finalCampingPayment);
        console.log(' total payment of all tours', this.totalPayment);
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNationalPayment(): any {
    this.service.sumOfNationalPayments().subscribe(
      (response: any) => {
        console.log(response);
        this.NationalPayment = response;
        this.finalNationalPayment = (this.NationalPayment[0].NationalSum);

        console.log(this.finalNationalPayment);

        this.totalPayment =
          this.totalPayment + parseInt(this.finalNationalPayment);
        console.log(' total payment of all tours', this.totalPayment);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getInternationalPayment(): any {
    this.service.sumOfInternationalPayments().subscribe(
      (response: any) => {
        console.log(response);
        this.InternationalPayment = response;
        this.finalInternationalPayment = (
          this.InternationalPayment[0].InternationalSum
        );

        console.log(this.finalInternationalPayment);

        this.totalPayment =
          this.totalPayment + parseInt(this.finalInternationalPayment);

        this.finalTotalPayment = this.totalPayment;

        console.log('final total payment of all tours', this.finalTotalPayment);
        console.log(' total payment of all tours', this.totalPayment);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
