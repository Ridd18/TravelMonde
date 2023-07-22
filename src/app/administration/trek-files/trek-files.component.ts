import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-trek-files',
  templateUrl: './trek-files.component.html',
  styleUrls: ['./trek-files.component.css'],
})
export class TrekFilesComponent implements OnInit {
  // selectedFiles?: FileList;
  // currentFile?: File;
  // progress = 0;
  // message = '';

  // file:File;
  message = '';
  fileName: string;
  $refs: any;

  // fileInfos?: Observable<any>;

  // fileName: String;

  uploadedFiles: Array<File>;

  constructor(
    private http: HttpClient,
    private uploadService: DestinationsService
  ) {}
  ngOnInit(): void {}

  onselectFile(event: any): void {
    this.uploadedFiles = event.target.files;
    
  }

  // onSelect() {
  //   const file = this.$refs.file.files[0]; // accessing file
  //   this.file = file;
  //   this.fileName = file.name;
  // }

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
  }
  //   try {
  //     await this.http.post("http://localhost:5000/upload", formData);
  //     console.log(this.fileName);
  //     this.message = "file uploaded successfully";
  //     // this.file = "";
  //     // this.$router.push("/admin/products");
  //   } catch (error) {
  //     console.log(error);
  //     this.message = "something went wrong";
  //   }
  // }
  // selectFile(event: any): void {
  //   this.selectedFiles = event.target.files;
  // }

  // fileChange(element: any) {
  //   this.uploadedFiles = element.target.files;
  // }

  // upload() {
  //   let formData = new FormData();
  //   for (var i = 0; i < this.uploadedFiles.length; i++) {

  //     this.fileName = this.uploadedFiles[i].name;
  //     console.log(this.fileName)
  //     formData.append(
  //       'uploads[]',
  //       this.uploadedFiles[i],
  //       this.uploadedFiles[i].name
  //     );
  //   }
  //   this.http
  //     .post('http://localhost:3000/trek/upload', formData)
  //     .subscribe((response) => {
  //       console.log('response received is ', response);
  //     });
  // }
}
