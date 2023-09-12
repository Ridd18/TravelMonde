import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Stripe,
  StripeElements,
  StripeCardElement,
  loadStripe,
} from '@stripe/stripe-js';
import { Trek } from 'src/app/models/trekModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-trek-payment',
  templateUrl: './trek-payment.component.html',
  styleUrls: ['./trek-payment.component.css'],
})
export class TrekPaymentComponent implements OnInit {
  public treks: Trek[];

  trek: any;

  id: number;

  paymentAmount3: any;

  finalAmount: number;

  amountInPaisa: number;

  stripe: Stripe | null = null;
  elements: StripeElements;
  card: StripeCardElement;

  @ViewChild('cardElement') cardElement?: ElementRef;

  ngOnInit(): void {
    this.getTreks();

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      console.log(this.id);
    });

    this.getTrek(this.id);
  }

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
        .createPaymentIntent(this.amountInPaisa)
        .subscribe((response) => {
          const clientSecret = response.clientSecret;
          console.log(response.clientSecret);
          console.log(clientSecret);
          console.log(this.amountInPaisa);

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

  public getTrek(id: number) {
    this.service.getTrek(this.id).subscribe(
      (data) => {
        console.log(data);
        this.trek = data;

        this.paymentAmount3 = JSON.stringify(this.trek.price);

        console.log(this.paymentAmount3);

        this.finalAmount = parseInt(this.paymentAmount3);

        this.amountInPaisa = this.finalAmount * 100;

        console.log(this.amountInPaisa);

        console.log('payment amount is', this.finalAmount);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
