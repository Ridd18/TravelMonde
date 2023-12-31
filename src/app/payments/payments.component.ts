import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {
  loadStripe,
  Stripe,
  StripeCardElement,
  StripeElements,
} from '@stripe/stripe-js';
import { PaymentService } from '../services/payment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Trek } from '../models/trekModel';
import { DestinationsService } from '../services/destinations.service';
import { NationalTour } from '../models/nationalTourModel';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent implements OnInit {

  public treks: Trek[];
  public nationalTours: NationalTour[];

  trek: any;
  nationalTour: any;

  id: number;
  idForNational: number;

  paymentAmount3: any;

  finalAmount: number;

  bidAmount: number;

  ngOnInit(): void {
    this.getTreks();
    this.getNationalTours()

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.idForNational = +params['id'];

      console.log(this.id);
      console.log(this.idForNational);
    });

    this.getTrek(this.id);
    this.getNationalTour(this.id);
  }

  stripe: Stripe | null = null;
  elements: StripeElements;
  card: StripeCardElement;

  @ViewChild('cardElement') cardElement?: ElementRef;



  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private service: DestinationsService,
    private route: ActivatedRoute
  ) {
    this.initializeStripe();
  }

  async initializeStripe() {
    this.stripe = await loadStripe(
      'pk_test_51KUrCWSGmt3oFQM9Ah2mgrTzlcMx9UUnqZ8icrWhsaKuODRe77YFO3lxWsggBKaJupI8LS6bNYfJdGcmTJ6i5SI400KzD1UABr'
    );
    this.elements = this.stripe!.elements();

    this.card = this.elements.create('card', { hidePostalCode: true });
    this.card.mount('#card-element');
    // Create an style object which passes when card element is initialized
  }

  async createPayment() {
    if (!this.card) {
      return;
    }

    const { token, error } = await this.stripe!.createToken(this.card);

    if (token) {
      this.paymentService
        .createPaymentIntent(this.finalAmount)
        .subscribe((response) => {
          const clientSecret = response.clientSecret;
          console.log(response.clientSecret);
          console.log(clientSecret);
          console.log(this.finalAmount);

          this.router.navigate(['/home']);
          // Handle the client secret as needed
        });
      console.log(token);
    } else {
      console.error(error);
    }
  }
  public getTreks(): void {
    this.service.getTreks().subscribe(
      (response: Trek[]) => {
        this.treks = response;
        console.log(this.treks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getNationalTours(): void {
    this.service.getNationalTours().subscribe(
      (response: NationalTour[]) => {
        this.nationalTours = response;
        console.log(this.nationalTours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTrek(id: number) {
    this.service.getTrek(this.id).subscribe(
      (data) => {
        console.log(data);
        this.trek = data;

        this.paymentAmount3 = JSON.stringify(this.trek.price);

        console.log(this.paymentAmount3);

        this.finalAmount = parseInt(this.paymentAmount3);

        console.log('payment amount is', this.finalAmount);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public getNationalTour(id: number) {
    this.service.getNationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.nationalTour = data;

        this.paymentAmount3 = JSON.stringify(this.nationalTour.price);

        console.log(this.paymentAmount3);

        this.finalAmount = parseInt(this.paymentAmount3);

        console.log('payment amount is', this.finalAmount);
      },
      (error) => {
        // this.getMaxBid(id);

        console.log(error);
      }
    );
  }
}
