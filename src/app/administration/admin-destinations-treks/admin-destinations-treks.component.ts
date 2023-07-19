import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-destinations-treks',
  templateUrl: './admin-destinations-treks.component.html',
  styleUrls: ['./admin-destinations-treks.component.css']
})
export class AdminDestinationsTreksComponent implements OnInit {

  


  msg = '';

  

  public trek: Trek[];


  constructor(private service: DestinationsService , private router: Router
    ) { }

  ngOnInit(): void {
  }


  addTrek(addTrekForm: NgForm)
  {
   
    this.service.addTrek(addTrekForm.value)
    .subscribe(
      res => {
      
        console.log(res);
        // localStorage.setItem('token', res.token)
        this.router.navigate(['/administration/collections']);

      },
      err => {
        console.log(err)
        this.msg="Bad Credentials";
      } 
    )
  }


}
