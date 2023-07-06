import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { Camping } from 'src/app/models/campingModel';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-camping',
  templateUrl: './view-camping.component.html',
  styleUrls: ['./view-camping.component.css']
})
export class ViewCampingComponent {

  public campings: Camping[];

  selectedId: number;

  // public trek: Trek[];

  camping: any;

  id: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getCampings();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getCamping(this.id);
  
    
  }

  public getCamping(id: number) {
    this.service.getCamping(this.id).subscribe(
      (data) => {
        console.log(data);
        this.camping = data;
      },
      (error) => {
        // this.getMaxBid(id);
        

        console.log(error);
      }
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

  public getAllCampings() {
    this.getCampings();
  }

  public goBackToCampings() {
    this.router.navigate(['/destinations/camping']);
  }

}
