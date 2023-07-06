import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Camping } from 'src/app/models/campingModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations-camping',
  templateUrl: './destinations-camping.component.html',
  styleUrls: ['./destinations-camping.component.css']
})
export class DestinationsCampingComponent implements OnInit {

  public campings: Camping[];

  public canping$:any

  selectedId: number;


  constructor(
    private service: DestinationsService,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.getCampings(); 

    this.canping$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getCampings();
      })
    );

   }

   public getCampings(): void {
    this.service.getCampings().subscribe(
      (response: Camping[]) => {
        this.campings = response;
        console.log(this.campings)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
