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
import { internationalFiles } from '../models/InternationalFileModel';
import { internationalFile } from '../models/InternationalFilesModel';
import { nationalFiles } from '../models/nationalFileModel';
import { nationalFile } from '../models/nationalFilesModel';
import { internationalRating } from '../models/internationalRatingModel';
import { trekRating } from '../models/trekRatingModel';
import { campingRating } from '../models/campingRatingModel';
import { nationalRating } from '../models/nationalRatingModel';
import { Feedback } from '../models/feedbackModel';

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

  //get trek file by file name
  public getTrekFileByFilename(name: string): Observable<trekFile> {
    return this.http.get<trekFile>(`${this.apiServerUrl}/trek/file/${name}`);
  }

  //get trek file by id
  public getTrekFileById(id: number): Observable<trekFile> {
    return this.http.get<trekFile>(`${this.apiServerUrl}/trek/fileById/${id}`);
  }

  //add rating
  submitTrekRating(rating: number, id: number) {
    return this.http.post(`${this.apiServerUrl}/trek/addrating`, {
      rating,
      id,
    });
  }

  //get avg rating
  getTrekAverageRating(id: number) {
    return this.http.get(`${this.apiServerUrl}/trek/ratings/${id}`);
  }

  //get all avg rating
  getTrekAverageRatings(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/trekAVGratings`);
  }

  //get all ratings
  public getAllTrekRatings(): Observable<trekRating[]> {
    return this.http.get<trekRating[]>(`${this.apiServerUrl}/trekRatings`);
  }

  //payments
  public sumOfTrekPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/trekSumPayments`);
  }


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

  //get trek camp by file name
  public getCampFileByFilename(name: string): Observable<campFile> {
    return this.http.get<campFile>(`${this.apiServerUrl}/camp/file/${name}`);
  }

  //get camp file by id
  public getCampFileById(id: number): Observable<campFile> {
    return this.http.get<campFile>(
      `${this.apiServerUrl}/camping/fileById/${id}`
    );
  }

  //add rating
  submitCampRating(rating: number, id: number) {
    return this.http.post(`${this.apiServerUrl}/camping/addrating`, {
      rating,
      id,
    });
  }

  //get avg rating
  getCampAverageRating(id: number) {
    return this.http.get(`${this.apiServerUrl}/camping/ratings/${id}`);
  }

  //get all avg rating
  getCampingAverageRatings(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/campingAVGratings`);
  }

  //get all ratings
  public getAllCampRatings(): Observable<campingRating[]> {
    return this.http.get<campingRating[]>(
      `${this.apiServerUrl}/campingRatings`
    );
  }

  
  //payments
  public sumOfCampPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/campingSumPayments`);
  }


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

  //download national file

  public downloadNationalFile(name: string): Observable<nationalFiles> {
    return this.http.get<nationalFiles>(
      `${this.apiServerUrl}/nationalTour/files/${name}`
    );
  }

  //get all nationalTour files
  getNationalFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/filesnationalTour`);
  }

  //get nationalTour file by file name
  public getNationalFileByFilename(name: string): Observable<nationalFile> {
    return this.http.get<nationalFile>(
      `${this.apiServerUrl}/nationalTour/file/${name}`
    );
  }

  //get nationalTour file by id
  public getNationalFileById(id: number): Observable<nationalFile> {
    return this.http.get<nationalFile>(
      `${this.apiServerUrl}/nationalTour/fileById/${id}`
    );
  }

  //add rating
  submitNationalRating(rating: number, id: number) {
    return this.http.post(`${this.apiServerUrl}/nationalTour/addrating`, {
      rating,
      id,
    });
  }

  //get avg rating
  getNationalAverageRating(id: number) {
    return this.http.get(`${this.apiServerUrl}/national/ratings/${id}`);
  }

  //get all avg rating
  getNationalAverageRatings(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/nationalTourAVGratings`);
  }

  //get all ratings
  public getAllNationalRatings(): Observable<nationalRating[]> {
    return this.http.get<nationalRating[]>(
      `${this.apiServerUrl}/nationalRatings`
    );
  }

  
  //payments
  public sumOfNationalPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/nationalTourSumPayments`);
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

  //download international file

  public downloadInternationalFile(
    name: string
  ): Observable<internationalFiles> {
    return this.http.get<internationalFiles>(
      `${this.apiServerUrl}/internationalTour/files/${name}`
    );
  }

  //get all internationalTour files
  getinternationalFiles(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/filesinternationalTour`);
  }

  //get internationalTour file by file name
  public getinternationalFileByFilename(
    name: string
  ): Observable<internationalFile> {
    return this.http.get<internationalFile>(
      `${this.apiServerUrl}/internationalTour/file/${name}`
    );
  }

  //get internationalTour file by id
  public getinternationalFileById(id: number): Observable<internationalFile> {
    return this.http.get<internationalFile>(
      `${this.apiServerUrl}/internationalTour/fileById/${id}`
    );
  }

  //add rating
  submitRating(rating: number, id: number) {
    return this.http.post(`${this.apiServerUrl}/internationalTour/addrating`, {
      rating,
      id,
    });
  }

  //get avg rating
  getAverageRating(id: number) {
    return this.http.get(
      `${this.apiServerUrl}/internationalTour/ratings/${id}`
    );
  }

  //get all avg rating
  getInternationalAverageRatings(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/internationalTourAVGratings`);
  }

  //get all ratings
  public getAllRatings(): Observable<internationalRating[]> {
    return this.http.get<internationalRating[]>(
      `${this.apiServerUrl}/internationalTourRatings`
    );
  }

   //payments
   public sumOfInternationalPayments(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/internationalTourSumPayments`);
  }


  //FEEDBACK

  public addFeedback(feedback: Feedback): Observable<Feedback> {
    console.log(feedback);
    return this.http.post<Feedback>(
      `${this.apiServerUrl}/feedback/add`,
      feedback
    );
  }

  public getFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiServerUrl}/feedback`);
  }

  public getFeedback(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiServerUrl}/feedback/${id}`);
  }

  public deleteFeedback(feedbackid: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/feedback/delete/${feedbackid}`
    );
  }

  public countFeedbacks(): Observable<any> {
    return this.http.get<any>(`${this.apiServerUrl}/feedback/count`);
  }
}
