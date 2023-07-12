import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  public users: User[];

  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.service.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteuser(Userid: number): void {
    this.service.deleteUser(Userid).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
