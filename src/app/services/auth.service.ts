import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/userModel';
import { Admin } from '../models/adminModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  singup(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(`${this.apiServerUrl}/user/register`, user);
  }

  login(user: User): Observable<User> {
    console.log(user);

    return this.http.post<User>(`${this.apiServerUrl}/user/login`, user);
  }

  loginAdmin(admin: Admin): Observable<Admin> {
    console.log(admin);

    return this.http.post<Admin>(`${this.apiServerUrl}/admin/login`, admin);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user`);
  }

  public deleteUser(Userid: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${Userid}`);
  }
}
