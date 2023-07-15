import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  public users: User[];

  user$: any;

  selectedId: number;

  constructor(private router: Router, private service: AuthService,  private http: HttpClient,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUsers();

    this.user$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getUsers();
      })
    );
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
