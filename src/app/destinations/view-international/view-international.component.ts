import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { NationalTour } from 'src/app/models/nationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-international',
  templateUrl: './view-international.component.html',
  styleUrls: ['./view-international.component.css']
})
export class ViewInternationalComponent {

  public internationalTours: InternationalTour[];

  selectedId: number;

  // public trek: Trek[];

  internationalTour: any;

  id: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInterNationalTours();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getInterNationalTour(this.id);
  
    
  }

  public getInterNationalTour(id: number) {
    this.service.getInternationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.internationalTour = data;
      },
      (error) => {
        console.log(error);
      }
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

  public getAllInterNationalTours() {
    this.getInterNationalTours();
  }

  public goBackToInterNationalTours() {
    this.router.navigate(['/destinations/international']);
  }



}
