import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations-national',
  templateUrl: './destinations-national.component.html',
  styleUrls: ['./destinations-national.component.css']
})
export class DestinationsNationalComponent {

  public nationalTours: NationalTour[];

  public nationalTour$:any

  selectedId: number;

  constructor(
    private service: DestinationsService,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.getNationalTours(); 

    this.nationalTour$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getNationalTours();
      })
    );

   }

   public getNationalTours(): void {
    this.service.getNationalTours().subscribe(
      (response: NationalTour[]) => {
        this.nationalTours = response;
        console.log(this.nationalTours)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}


