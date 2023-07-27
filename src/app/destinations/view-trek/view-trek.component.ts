import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { saveAs } from 'file-saver';
import { trekFiles } from 'src/app/models/trekFileModel';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import { trekFile } from 'src/app/models/trekFilesModel';

@Component({
  selector: 'app-view-trek',
  templateUrl: './view-trek.component.html',
  styleUrls: ['./view-trek.component.css'],
})
export class ViewTrekComponent {
  public treks: Trek[];

  selectedId: number;

  // public trek: Trek[];

  private apiServerUrl = 'http://localhost:3000';

  trek: any;

  id: number;

  items: [];
  items2: trekFiles[];

  trekByFileName: trekFile;

  fileName: string;

  downloadedFile: any;

  filePath: string;

  TrekName: string

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTreks();

    this.getAllTrekFiles();

    this.getFileByFileName(this.TrekName);

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getTrek(this.id);
  }

  public getTrek(id: number) {
    this.service.getTrek(this.id).subscribe(
      (data) => {
        console.log(data);
        this.trek = data;
      },
      (error) => {
        // this.getMaxBid(id);

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

        this.TrekName = JSON.stringify(this.items2[3].name);


        console.log(this.TrekName);
     

        this.getFileByFileName(this.TrekName);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
      // 
  }

  // downloadFile(fileName: string) {
  //   this.http
  //     .get(`${this.apiServerUrl}/trek/files/${fileName}`, {
  //       responseType: 'arraybuffer',
  //     })
  //     .subscribe((data) => {
  //       const blob = new Blob([data], {
  //         type: 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document , image/jpeg ,image/png  ',
  //       });
  //       const fileeName = fileName;
  //       saveAs(blob, fileName);
  //     });

  //   this.getFileByFileName(fileName);
  // }

  downloadFile(fileName: string) {

    const trekkName = fileName +".pdf"
    console.log(trekkName) 
    this.http
      .get(`${this.apiServerUrl}/trek/files/${trekkName}`, {
        responseType: 'arraybuffer',
      })
      .subscribe((data) => {
        const blob = new Blob([data], {
          type: 'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document , image/jpeg ,image/png  ',
        });
        const fileeName = fileName;
        saveAs(blob, trekkName);
      });

    this.getFileByFileName(fileName);
  }

  public getFileByFileName(name: string) {
    this.service.getTrekFileByFilename(name).subscribe(
      (data) => {
        console.log(data);
        this.trekByFileName = data;

        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
