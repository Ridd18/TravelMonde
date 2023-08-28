import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as saveAs from 'file-saver';
import { switchMap } from 'rxjs';
import { nationalFiles } from 'src/app/models/nationalFileModel';
import { nationalFile } from 'src/app/models/nationalFilesModel';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-national',
  templateUrl: './view-national.component.html',
  styleUrls: ['./view-national.component.css'],
})
export class ViewNationalComponent {
  //ratiing

  idForRating: number;

  selectedRating: number | null = null;

  //end rating

  public nationalTours: NationalTour[];

  selectedId: number;

  private apiServerUrl = 'http://localhost:3000';

  nationalTour: any;

  id: number;

  nationalFile: any;

  idForFile: number;

  items: [];
  items2: nationalFiles[];

  nationalByFileName: nationalFile;

  fileName: string;

  NationalName: string;

  public national$: any;

  IdForPayment: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getNationalTours();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.idForFile = +params['id'];
      this.idForRating = +params['id'];
      console.log(this.id);
      console.log(this.idForFile);
    });
    this.getNationalTour(this.id);

    this.getNationalFile(this.idForFile);

    this.national$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.IdForPayment = Number(params.get('id'));
        console.log(this.IdForPayment);
        return this.service.getNationalTours();
      })
    );
  }

  public getNationalTour(id: number) {
    this.service.getNationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.nationalTour = data;
      },
      (error) => {
      

        console.log(error);
      }
    );
  }

  public getNationalTours(): void {
    this.service.getNationalTours().subscribe(
      (response: NationalTour[]) => {
        this.nationalTours = response;
        console.log(this.nationalTours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllNationalTours() {
    this.getNationalTours();
  }

  public goBackToNationalTours() {
    this.router.navigate(['/destinations/national']);
  }

  public getAllNationalFiles(): void {
    this.service.getNationalFiles().subscribe(
      (response: nationalFiles[]) => {
        this.items2 = response;
        console.log(this.items2);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    //
  }

  downloadFile(fileName: string) {
    this.http
      .get(`${this.apiServerUrl}/nationalTour/files/${fileName}`, {
        responseType: 'arraybuffer',
      })
      .subscribe((data) => {
        const blob = new Blob([data], {
          type: 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document , image/jpeg ,image/png  ',
        });
        const fileeName = fileName;
        saveAs(blob, fileName);
      });
  }

  public getNationalFile(id: number) {
    this.service.getNationalFileById(this.idForFile).subscribe(
      (data) => {
        console.log(data);
        this.nationalFile = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onStarClick(rating: number) {
    this.selectedRating = rating;
    const idInRating = this.idForRating;
    console.log('id for rating', idInRating);

    this.service.submitNationalRating(rating, this.idForRating).subscribe(
      (response) => {
        console.log(response);
        // Handle successful submission, e.g., show a success message
        console.log('Rating submitted successfully');
      },
      (error) => {
        // Handle error during submission, e.g., show an error message
        console.error('Error submitting rating:', error);
      }
    );
  }

  public goToBooking() {
    this.router.navigate(['/payment']);
  }
}
