import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { campFiles } from 'src/app/models/campFileModel';
import { campFile } from 'src/app/models/campFilesModel';
import { Camping } from 'src/app/models/campingModel';
import { saveAs } from 'file-saver';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-camping',
  templateUrl: './view-camping.component.html',
  styleUrls: ['./view-camping.component.css']
})
export class ViewCampingComponent {

  public campings: Camping[];

  selectedId: number;

  // public trek: Trek[];

  camping: any;

  id: number;

  campFile: any;

  idForFile: number;

  private apiServerUrl = 'http://localhost:3000';

  items: [];
  items2: campFiles[];

  campByFileName: campFile;

  fileName: string;

  

  CampName: string

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.getCampings();

   
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.idForFile = +params['id'];
      console.log(this.id);
      console.log(this.idForFile);
    });
    this.getCamping(this.id);
  
    this.getCampFile(this.idForFile)
    
  }

  public getCamping(id: number) {
    this.service.getCamping(this.id).subscribe(
      (data) => {
        console.log(data);
        this.camping = data;
      },
      (error) => {
        // this.getMaxBid(id);
        

        console.log(error);
      }
    );
  }

  public getCampings(): void {
    this.service.getCampings().subscribe(
      (response: Camping[]) => {
        this.campings = response;
        console.log(this.campings)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllCampings() {
    this.getCampings();
  }

  public goBackToCampings() {
    this.router.navigate(['/destinations/camping']);
  }


  public getAllCampFiles(): void {
    this.service.getCampFiles().subscribe(
      (response: campFiles[]) => {
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
      .get(`${this.apiServerUrl}/camping/files/${fileName}`, {
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

  public getCampFile(id: number) {
    this.service.getCampFileById(this.idForFile).subscribe(
      (data) => {
        console.log(data);
        this.campFile = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
