import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';


@Component({
  selector: 'app-destinations-treks',
  templateUrl: './destinations-treks.component.html',
  styleUrls: ['./destinations-treks.component.css'],
})
export class DestinationsTreksComponent implements OnInit {

  public treks: Trek[];

  public trek$:any

  selectedId: number;


  constructor(
    private service: DestinationsService,
    private route:ActivatedRoute
    
  ) {}


  ngOnInit(): void {
    this.getTreks(); 

    this.trek$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        console.log(this.selectedId);
        return this.service.getTreks();
      })
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
}
