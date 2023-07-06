import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-view-trek',
  templateUrl: './view-trek.component.html',
  styleUrls: ['./view-trek.component.css']
})
export class ViewTrekComponent {

  public treks: Trek[];

  selectedId: number;

  // public trek: Trek[];

  trek: any;

  id: number;

  constructor(
    private router: Router,
    private service: DestinationsService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTreks();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.getTrek(this.id);
  
    
  }

  public getTrek(id: number) {
    this.service.getTrek(this.id).subscribe(
      (data) => {
        console.log(data);
        this.trek = data;
      },
      (error) => {
        // this.getMaxBid(id);
        

        console.log(error);
      }
    );
  }

  public getTreks(): void {
    this.service.getTreks().subscribe(
      (response: Trek[]) => {
        this.treks = response;
        console.log(this.treks)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllTreks() {
    this.getTreks();
  }
}
