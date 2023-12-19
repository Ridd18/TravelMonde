import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trek-files',
  templateUrl: './trek-files.component.html',
  styleUrls: ['./trek-files.component.css'],
})
export class TrekFilesComponent implements OnInit {
  message = '';
  fileName: string;

  uploadedFiles: Array<File> = [];

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  onselectFile(event: any): void {
    this.uploadedFiles = <Array<File>>event.target.files;
  }

  async onSubmit() {
    const formData = new FormData();
    const files: Array<File> = this.uploadedFiles;
    console.log(files);

    for (var i = 0; i < this.uploadedFiles.length; i++) {
      this.fileName = this.uploadedFiles[i].name;
      console.log(this.fileName);
      formData.append(
        'files',
        this.uploadedFiles[i],
        this.uploadedFiles[i].name
      );
    }
    console.log('form data variable :   '+ formData.toString());
    this.http
      .post('http://localhost:3000/trek/upload', formData)
      .subscribe((response) => {
        console.log('response received is ', response);
      });

    this.router.navigate(['/administration/collections']);
  }
}
