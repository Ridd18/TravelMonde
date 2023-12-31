import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { saveAs } from 'file-saver';
import { switchMap } from 'rxjs';
import { internationalFiles } from 'src/app/models/InternationalFileModel';
import { internationalFile } from 'src/app/models/InternationalFilesModel';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-international',
  templateUrl: './view-international.component.html',
  styleUrls: ['./view-international.component.css'],
})
export class ViewInternationalComponent {
  //ratiing
  idForRating: number;

  selectedRating: number | null = null;

  //end rating

  public internationalTours: InternationalTour[];

  selectedId: number;


  // public trek: Trek[];

  internationalTour: any;
  internationalTourFile: any;

  id: number;

  idForFile: number;

  private apiServerUrl = 'http://localhost:3000';

  items: [];
  items2: internationalFiles[];

  internationalTourByFileName: internationalFile;

  fileName: string;

  internationalTourName: string;

  public international$: any;

  IdForPayment: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getInterNationalTours();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.idForFile = +params['id'];
      this.idForRating = +params['id'];
      console.log(this.id);
      console.log(this.idForRating);
      console.log(this.idForFile);
    });
    this.getInterNationalTour(this.id);

    this.getInterNationalTourFile(this.idForFile);

    this.international$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.IdForPayment = Number(params.get('id'));
        console.log(this.IdForPayment);
        return this.service.getInternationalTours();
      })
    );
  }

  public getInterNationalTour(id: number) {
    this.service.getInternationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.internationalTour = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getInterNationalTourFile(id: number) {
    this.service.getinternationalFileById(this.idForFile).subscribe(
      (data) => {
        console.log(data);
        this.internationalTourFile = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getInterNationalTours(): void {
    this.service.getInternationalTours().subscribe(
      (response: InternationalTour[]) => {
        this.internationalTours = response;
        console.log(this.internationalTours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllInterNationalTours() {
    this.getInterNationalTours();
  }

  public goBackToInterNationalTours() {
    this.router.navigate(['/destinations/international']);
  }

  public getAllInterNationalToursFiles(): void {
    this.service.getinternationalFiles().subscribe(
      (response: internationalFiles[]) => {
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
      .get(`${this.apiServerUrl}/internationalTour/files/${fileName}`, {
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

  onStarClick(rating: number) {
    this.selectedRating = rating;
    const idInRating = this.idForRating;
    console.log('id for rating', idInRating);

    this.service.submitRating(rating, this.idForRating).subscribe(
      (response) => {
        console.log(response);
        alert("Rating submitted successfully")
        // Handle successful submission, e.g., show a success message
        console.log('Rating submitted successfully');
      },
      (error) => {
        // Handle error during submission, e.g., show an error message
        console.error('Error submitting rating:', error);
      }
    );
  }
}
