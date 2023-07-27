import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trek } from '../models/trekModel';
import { Camping } from '../models/campingModel';
import { NationalTour } from '../models/nationalTourModel';
import { InternationalTour } from '../models/internationalTourModel';
import { trekFiles } from '../models/trekFileModel';
import { trekFile } from '../models/trekFilesModel';
import { campFiles } from '../models/campFileModel';
import { campFile } from '../models/campFilesModel';

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  private apiServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  //Treks
  public getTreks(): Observable<Trek[]> {
    return this.http.get<Trek[]>(`${this.apiServerUrl}/trek`);
  }

  public getTrek(id: number): Observable<Trek> {
    return this.http.get<Trek>(`${this.apiServerUrl}/trek/${id}`);
  }

  public addTrek(trek: Trek): Observable<Trek> {
    return this.http.post<Trek>(`${this.apiServerUrl}/trek/add`, trek);
  }

  public countTreks(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/trek/count`);
  }

  //download trek file

  public downloadTrekFile(name: string): Observable<trekFiles> {
    return this.http.get<trekFiles>(`${this.apiServerUrl}/trek/files/${name}`);
  }

  //get all trek files
  getTrekFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/filesTrek`);
  }

  //get all trek files
  // getAllTrekFiles(): Observable<trekFiles[]> {
  //   return this.http.get<trekFiles[]>(`${this.apiServerUrl}/filesTrek`);
  // }

  //get trek file by file name
  public getTrekFileByFilename(name: string): Observable<trekFile> {
    return this.http.get<trekFile>(`${this.apiServerUrl}/trek/file/${name}`);
  }

  // //get trek file by file name
  // public getTrekFileByFilename(name: string): Observable<trekFile[]> {
  //   return this.http.get<trekFile[]>(`${this.apiServerUrl}/trek/file/${name}`);
  //  }

  //Campings
  public getCampings(): Observable<Camping[]> {
    return this.http.get<Camping[]>(`${this.apiServerUrl}/camping`);
  }

  public getCamping(id: number): Observable<Camping> {
    return this.http.get<Camping>(`${this.apiServerUrl}/camping/${id}`);
  }

  public addCamping(camping: Camping): Observable<Camping> {
    return this.http.post<Camping>(`${this.apiServerUrl}/camping/add`, camping);
  }

  public countCampings(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/camping/count`);
  }

  //download camp file

  public downloadCampFile(name: string): Observable<campFiles> {
    return this.http.get<campFiles>(`${this.apiServerUrl}/camp/files/${name}`);
  }

  //get all camp files
  getCampFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/filesCamping`);
  }

  //get trek file by file name
  public getCampFileByFilename(name: string): Observable<campFile> {
    return this.http.get<campFile>(`${this.apiServerUrl}/camp/file/${name}`);
  }

  // //get trek file by file name
  // public getTrekFileByFilename(name: string): Observable<trekFile[]> {
  //   return this.http.get<trekFile[]>(`${this.apiServerUrl}/trek/file/${name}`);
  //  }

  //National Tours

  public getNationalTours(): Observable<NationalTour[]> {
    return this.http.get<NationalTour[]>(`${this.apiServerUrl}/nationalTour`);
  }

  public getNationalTour(id: number): Observable<NationalTour> {
    return this.http.get<NationalTour>(
      `${this.apiServerUrl}/nationalTour/${id}`
    );
  }

  public addNationalTour(nationalTour: NationalTour): Observable<NationalTour> {
    return this.http.post<NationalTour>(
      `${this.apiServerUrl}/nationalTour/add`,
      nationalTour
    );
  }

  public countNationalTours(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/nationalTour/count`);
  }

  //InterNational Tours

  public getInternationalTours(): Observable<InternationalTour[]> {
    return this.http.get<InternationalTour[]>(
      `${this.apiServerUrl}/internationalTour`
    );
  }

  public getInternationalTour(id: number): Observable<InternationalTour> {
    return this.http.get<InternationalTour>(
      `${this.apiServerUrl}/internationalTour/${id}`
    );
  }

  public addInternationalTour(
    internationalTour: InternationalTour
  ): Observable<InternationalTour> {
    return this.http.post<InternationalTour>(
      `${this.apiServerUrl}/internationalTour/add`,
      internationalTour
    );
  }

  public countInternationalTours(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/internationalTour/count`);
  }
}
