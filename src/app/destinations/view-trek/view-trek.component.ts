import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {saveAs} from 'file-saver'
import { response } from 'express';
import { switchMap } from 'rxjs';
import { trekFiles } from 'src/app/models/trekFileModel';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import { data } from 'jquery';

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

  fileName: string;

  downloadedFile: any;

  filePath: string;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getTreks();

    this.getAllTrekFiles();

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
        this.filePath ="`http://localhost:3000/trek/files/${item.name}`"
        console.log(this.filePath);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  downloadFile(fileName: string) {
    this.http.get(`${this.apiServerUrl}/trek/files/${fileName}` , {responseType: 'arraybuffer'}).subscribe(data=> {
      const blob = new Blob([data], {type:'application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document , image/jpeg ,image/png  '})
      const fileeName = fileName 
      saveAs(blob, fileName)
    });
  }


  //download files
  public onClick(fileName: string) {
    
    this.http.get(`${this.apiServerUrl}/trek/files/${fileName}`);
    console.log(fileName)

    // href="`http://localhost:3000/trek/files/${item.name}`"
  }

  // href="`http://localhost:3000/trek/files/${item.name}`"
}
