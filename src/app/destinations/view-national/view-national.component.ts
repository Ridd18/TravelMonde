import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-national',
  templateUrl: './view-national.component.html',
  styleUrls: ['./view-national.component.css']
})
export class ViewNationalComponent {

  public nationalTours: NationalTour[];

  selectedId: number;

  // public trek: Trek[];

  nationalTour: any;

  id: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNationalTours();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getNationalTour(this.id);
  
    
  }

  public getNationalTour(id: number) {
    this.service.getNationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.nationalTour = data;
      },
      (error) => {
        // this.getMaxBid(id);
        

        console.log(error);
      }
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

  public getAllNationalTours() {
    this.getNationalTours();
  }

  public goBackToNationalTours() {
    this.router.navigate(['/destinations/national']);
  }


}
