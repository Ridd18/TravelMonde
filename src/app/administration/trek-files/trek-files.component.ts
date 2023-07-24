import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-trek-files',
  templateUrl: './trek-files.component.html',
  styleUrls: ['./trek-files.component.css'],
})
export class TrekFilesComponent implements OnInit {

  message = '';
  fileName: string;
  $refs: any;

  trekName: string;

 
  public treks: Trek[];

  public trek$:any

  selectedId: number;




  uploadedFiles: Array<File>;

  constructor(
    private service: DestinationsService,
    private http: HttpClient,
    private route:ActivatedRoute,
    private router: Router
    
  ) {}
  ngOnInit(): void {

    this.getTreks(); 

    this.trek$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getTreks();
      })
    );
  }

  onselectFile(event: any): void {
    this.uploadedFiles = event.target.files;
    
  }


  async onSubmit() {

    
    const formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.fileName = this.uploadedFiles[i].name;
      console.log(this.fileName);
      formData.append(
        'file',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }
    this.http
      .post('http://localhost:3000/trek/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      });

      this.router.navigate(['/administration/collections']);
  }

  public getTreks(): void {
    this.service.getTreks().subscribe(
      (response: Trek[]) => {
        this.treks = response;
        console.log(this.treks)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
