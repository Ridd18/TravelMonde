import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

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
