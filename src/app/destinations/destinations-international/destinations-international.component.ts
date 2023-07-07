import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations-international',
  templateUrl: './destinations-international.component.html',
  styleUrls: ['./destinations-international.component.css']
})
export class DestinationsInternationalComponent {

  public internationalTours: InternationalTour[];

  public internationalTour$:any

  selectedId: number;

  constructor(
    private service: DestinationsService,
    private route:ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.getInterNationalTours(); 

    this.internationalTour$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getInternationalTours();
      })
    );

   }

   public getInterNationalTours(): void {
    this.service.getInternationalTours().subscribe(
      (response: InternationalTour[]) => {
        this.internationalTours = response;
        console.log(this.internationalTours)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
