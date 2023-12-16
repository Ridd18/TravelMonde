import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // public user: User[]

  constructor(public authService: AuthService,  private router: Router){}  
  ngOnInit(): void {
    
  }

  public registerUser(registerForm: NgForm)
  {
    // registerForm.value['phone'] = [0~9,10] 
    
    this.authService.singup(registerForm.value)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);

      },
      err => {
        console.log(err)
        // this.msg="Bad Credentials";
      }
    )
  }

}
