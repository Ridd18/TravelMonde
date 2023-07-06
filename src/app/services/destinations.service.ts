import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trek } from '../models/trekModel';
import { Camping } from '../models/campingModel';

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
      return this.http.get<any>(`${this.apiServerUrl}/camping/count`);
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
        return this.http.get<any>(`${this.apiServerUrl}/trek/count`);
      }

}
