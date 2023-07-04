import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(public authService: AuthService,  private router: Router){}  

  ngOnInit(): void {
    
  }

  public onSignup(loginForm: NgForm)
  {  

    this.authService.login(loginForm.value)
    .subscribe(
      res => {
       console.log(res) 
       this.router.navigate(['/']);
      },
      err => {
        console.log(err) 
        // this.msg="Bad Credentials";
      }
  
    )

    // this.apiService.CreateUser(form.value.email, form.value.password);  
  }  

}
