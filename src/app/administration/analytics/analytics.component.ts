import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
import { campingRating } from 'src/app/models/campingRatingModel';
import { internationalRating } from 'src/app/models/internationalRatingModel';
import { nationalRating } from 'src/app/models/nationalRatingModel';
import { trekRating } from 'src/app/models/trekRatingModel';
import { AuthService } from 'src/app/services/auth.service';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
})
export class AnalyticsComponent implements OnInit {
  public trekRatings: trekRating[];
  public campRatings: campingRating[];
  public nationalRatings: nationalRating[];
  public internationalRatings: internationalRating[];

  successfulTrek: trekRating[];

  constructor(private service: DestinationsService) {}

  ngOnInit(): void {
    this.getAllTrekRatings();
    this.getAllCampRatings();
    this.getAllNationalRatings();
    this.getAllInternationalRatings();

    this.getSuccessfulTrekWithRating();
  }

  public getSuccessfulTrekWithRating(): void {
    this.service.getSuccessfulTrek().subscribe(
      (response: any[]) => {
        this.successfulTrek = response;

        // const labels = response.map((item) => ` ${item.trek_name}`);

        // const chartData = {
        //   data: response.map((item) => parseFloat(item.avg)),
        // };
        // this.pieChartData = [chartData];

        // this.pieChartLabels = labels;
        // // this.pieChartData = ratings;

        // console.log(this.pieChartLabels);
        // console.log(this.pieChartData);

        console.log(this.successfulTrek);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public barChartType: ChartType = 'bar';
  public barChartLabels: string[] = [];
  public barChartData: any[] = [];
  public barChartLegend: boolean = true;
  public barChartOptions1 : any[] = []


  public pieChartType: ChartType = 'pie';
  public pieChartLabels: string[] = [];
  public pieChartData: any[] = [];
  public pieChartLegend: boolean = true;

  public barChartTypeCamp: ChartType = 'bar';
  public barChartLabelsCamp: string[] = [];
  public barChartDataCamp: any[] = [];
  public barChartLegendCamp: boolean = true;

  public pieChartTypeCamp: ChartType = 'pie';
  public pieChartLabelsCamp: string[] = [];
  public pieChartDataCamp: any[] = [];
  public pieChartLegendCamp: boolean = true;

  public barChartTypeNational: ChartType = 'bar';
  public barChartLabelsNational: string[] = [];
  public barChartDataNational: any[] = [];
  public barChartLegendNational: boolean = true;

  public pieChartTypeNational: ChartType = 'pie';
  public pieChartLabelsNational: string[] = [];
  public pieChartDataNational: any[] = [];
  public pieChartLegendNational: boolean = true;

  public barChartTypeInternational: ChartType = 'bar';
  public barChartLabelsInternational: string[] = [];
  public barChartDataInternational: any[] = [];
  public barChartLegendInternational: boolean = true;

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
          label: 'Treks',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  suggestedMax: 5,
                },
              },
            },
          },
        };

        this.pieChartData = [chartData];

        this.pieChartLabels = labels;

        this.barChartData = [chartData];

        this.barChartLabels = labels;

      

        console.log(this.pieChartLabels);
        console.log(this.pieChartData);
        console.log(this.barChartLabels);
        console.log(this.barChartData);

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
          label: 'Camps',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        };
        this.pieChartDataCamp = [chartData];

        this.pieChartLabelsCamp = labels;

        this.barChartDataCamp = [chartData];

        this.barChartLabelsCamp = labels;

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
        const labels = response.map((item) => ` ${item.national_name}`);

        const chartData = {
          data: response.map((item) => parseFloat(item.avg)),
          label: 'National Tours',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  suggestedMax: 5,
                },
              },
            },
          },
        };
        this.pieChartDataNational = [chartData];

        this.pieChartLabelsNational = labels;

        this.barChartDataNational = [chartData];

        this.barChartLabelsNational = labels;
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
          label: 'International Tours',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  suggestedMax: 5,
                },
              },
            },
          },
        };
        this.pieChartDataInternational = [chartData];

        this.pieChartLabelsInternational = labels;

        this.barChartDataInternational = [chartData];

        this.barChartLabelsInternational = labels;

        console.log(this.pieChartLabelsInternational);
        console.log(this.pieChartDataInternational);

        console.log(this.internationalRatings);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
