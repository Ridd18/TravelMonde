import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginData } from '../models/login.model';
import { Observable } from 'rxjs';

import { User } from '../models/userModel';
@Injectable({
	providedIn: 'root'
})
export class ApiService {

    private apiServerUrl =  "http://localhost:3000/user"

        constructor (private http:HttpClient) {
            
     }

        singup(user: User): Observable<User> {
           
            console.log(user)
            return  this.http.post<User>(`${this.apiServerUrl}/register`,user)
           
        }
 

        login(user:User): Observable<User> {
            console.log(user)

            return this.http.post<User>(
                `${this.apiServerUrl}/login`,
                user
              );
        }


}
