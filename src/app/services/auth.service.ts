import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  private apiServerUrl =  "http://localhost:3000"

  constructor (private http:HttpClient) {
      
}

  singup(user: User): Observable<User> {
     
      console.log(user)
      return  this.http.post<User>(`${this.apiServerUrl}/user/register`,user)
     
  }


  login(user:User): Observable<User> {
      console.log(user)

      return this.http.post<User>(
          `${this.apiServerUrl}/user/login`,
          user
        );
  }
}
