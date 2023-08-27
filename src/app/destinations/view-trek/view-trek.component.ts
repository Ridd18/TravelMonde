import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { saveAs } from 'file-saver';
import { trekFiles } from 'src/app/models/trekFileModel';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import { trekFile } from 'src/app/models/trekFilesModel';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-view-trek',
  templateUrl: './view-trek.component.html',
  styleUrls: ['./view-trek.component.css'],
})
export class ViewTrekComponent {

    //ratiing
    idForRating: number;

    selectedRating: number | null = null;
  
    //end rating
  public treks: Trek[];

  selectedId: number;

  private apiServerUrl = 'http://localhost:3000';

  trek: any;

  id: number;

  trekFile: any;

  idForFile: number;

  items: [];
  items2: trekFiles[];

  trekByFileName: trekFile;

  fileName: string;

  TrekName: string;

  public trek$:any

  IdForPayment: number;


  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTreks();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.idForFile = +params['id'];
      this.idForRating = +params['id'];
      console.log(this.id);
      console.log(this.idForFile);
    });
    this.getTrek(this.id);

    this.getTrekFile(this.idForFile);

    this.trek$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.IdForPayment = Number(params.get('id'));
        console.log(this.IdForPayment);
        return this.service.getTreks();
      })
    );
  }

  public getTrek(id: number) {
    this.service.getTrek(this.id).subscribe(
      (data) => {
        console.log(data);
        this.trek = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getTreks(): void {
    this.service.getTreks().subscribe(
      (response: Trek[]) => {
        this.treks = response;
        console.log(this.treks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllTreks() {
    this.getTreks();
  }

  public goBackToTreks() {
    this.router.navigate(['/destinations/treks']);
  }

  public getAllTrekFiles(): void {
    this.service.getTrekFiles().subscribe(
      (response: trekFiles[]) => {
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
      .get(`${this.apiServerUrl}/trek/files/${fileName}`, {
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

  public getTrekFile(id: number) {
    this.service.getTrekFileById(this.idForFile).subscribe(
      (data) => {
        console.log(data);
        this.trekFile = data;
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

    this.service.submitTrekRating(rating, this.idForRating).subscribe(
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
