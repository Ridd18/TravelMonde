import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/userModel';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css'],
})
export class EditUsersComponent implements OnInit {
  public user: User[];

  editUser: User;

  id: number;

  userToEdit: any;
  // deleteProduct: Product;

  constructor(
    public service: AuthService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });

    this.service.getUser(this.id).subscribe(
      (data) => {
        console.log(data);
        this.userToEdit = data;
      },
      (error) => console.log(error)
    );
  }

  // public getUser(id: number) {
  //   this.service.getUser(this.id).subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.userToEdit = data;
  //     },
  //     (error) => {
  //       // this.getMaxBid(id);

  //       console.log(error);
  //     }
  //   );
  // }

  public onUpdateUser(user: User): void {
    this.editUser = user;
    console.log(this.editUser);

    this.service.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.router.navigate(['/adminsitration/users']);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onEditUser(id: number, user: User): void {
    this.editUser = user;
    console.log(this.editUser);

    this.service.editUser(id,user).subscribe(
      (data) => {
        console.log(data);
        this.userToEdit = new User();
        console.log(this.userToEdit);
        // this.router.navigate(['/adminsitration/users']);
        this.goBackToUsers()
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public goBackToUsers() {
    this.router.navigate(['/administration/users']);
  }

}


  