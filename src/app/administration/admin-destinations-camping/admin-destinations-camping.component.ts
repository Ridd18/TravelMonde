import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Camping } from 'src/app/models/campingModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-admin-destinations-camping',
  templateUrl: './admin-destinations-camping.component.html',
  styleUrls: ['./admin-destinations-camping.component.css']
})
export class AdminDestinationsCampingComponent {

  msg = '';

  public camping: Camping[];


  constructor(private service: DestinationsService , private router: Router
    ) { }

  ngOnInit(): void {
  }


  addCamping(addCampingForm: NgForm)
  {
   
    this.service.addCamping(addCampingForm.value)
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
