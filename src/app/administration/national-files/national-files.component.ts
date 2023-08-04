import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-national-files',
  templateUrl: './national-files.component.html',
  styleUrls: ['./national-files.component.css']
})
export class NationalFilesComponent implements OnInit {

  message = '';
  fileName: string;

  uploadedFiles: Array<File>;

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

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
      .post('http://localhost:3000/nationalTour/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      });

    this.router.navigate(['/administration/collections']);
  }

}