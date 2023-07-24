import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trek } from '../models/trekModel';
import { Camping } from '../models/campingModel';
import { NationalTour } from '../models/nationalTourModel';
import { InternationalTour } from '../models/internationalTourModel';
import { trekFiles } from '../models/trekFileModel';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  private apiServerUrl =  "http://localhost:3000"

  constructor (private http:HttpClient) {
      
}

    //Treks
    public getTreks(): Observable<Trek[]> {
      return this.http.get<Trek[]>(`${this.apiServerUrl}/trek`);
    }
  
    public getTrek(id: number): Observable<Trek> {
      return this.http.get<Trek>(
        `${this.apiServerUrl}/trek/${id}`
      );
    }
  
    public addTrek(trek: Trek): Observable<Trek> {
      return this.http.post<Trek>(
        `${this.apiServerUrl}/trek/add`,
        trek
      );
    }
  
    public countTreks(): Observable<any> {
      return this.http.get<any>(`${this.apiServerUrl}/trek/count`);
    }
  
    // public deleteBuyerUser(Buyerid: number): Observable<void> {
    //   return this.http.delete<void>(
    //     `${this.apiServerUrl}/auction/buyer/delete/${Buyerid}`
    //   );
    // }
  

      //Campings
      public getCampings(): Observable<Camping[]> {
        return this.http.get<Camping[]>(`${this.apiServerUrl}/camping`);
      }
    
      public getCamping(id: number): Observable<Camping> {
        return this.http.get<Camping>(
          `${this.apiServerUrl}/camping/${id}`
        );
      }
    
      public addCamping(camping: Camping): Observable<Camping> {
        return this.http.post<Camping>(
          `${this.apiServerUrl}/camping/add`,
          camping
        );
      }

      public countCampings(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/camping/count`);
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

     //InterNational Tours


     public getInternationalTours(): Observable<InternationalTour[]> {
      return this.http.get<InternationalTour[]>(`${this.apiServerUrl}/internationalTour`);
    }
  
    public getInternationalTour(id: number): Observable<InternationalTour> {
      return this.http.get<InternationalTour>(
        `${this.apiServerUrl}/internationalTour/${id}`
      );
    }
  
    public addInternationalTour(internationalTour: InternationalTour): Observable<InternationalTour> {
      return this.http.post<InternationalTour>(
        `${this.apiServerUrl}/internationalTour/add`,
        internationalTour
      );
    }

    public countInternationalTours(): Observable<any> {
      return this.http.get<any>(`${this.apiServerUrl}/internationalTour/count`);
    }



    //file upload

    upload(file: File): Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();
  
      formData.append('file', file);
  
      const req = new HttpRequest('POST', `${this.apiServerUrl}/trek/fileUpload`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
  
      return this.http.request(req);
    }
  

    //download 

    public downloadTrekFile(name: string): Observable<trekFiles> {
      return this.http.get<trekFiles>(
        `${this.apiServerUrl}/trek/files/${name}`
      );
    }
    
    getTrekFiles(): Observable<any> {
      return this.http.get<any>(`${this.apiServerUrl}/filesTrek`);
    }

    getAllTrekFiles(): Observable<trekFiles[]> {
      return this.http.get<trekFiles[]>(`${this.apiServerUrl}/filesTrek`);
    }

}
