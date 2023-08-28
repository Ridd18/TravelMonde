import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Stripe, StripeElements, StripeCardElement, loadStripe } from '@stripe/stripe-js';
import { InternationalTour } from 'src/app/models/internationalTourModel';
import { DestinationsService } from 'src/app/services/destinations.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-international-payment',
  templateUrl: './international-payment.component.html',
  styleUrls: ['./international-payment.component.css']
})
export class InternationalPaymentComponent implements OnInit{

  public internationalTours: InternationalTour[];

  internationalTour: any;

  id: number;

  paymentAmount3: any;

  finalAmount: number;

  stripe: Stripe | null = null;
  elements: StripeElements;
  card: StripeCardElement;

  @ViewChild('cardElement') cardElement?: ElementRef;



  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      console.log(this.id);

      this.getInternationalTour(this.id);
    });

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

  public getInterationalTours(): void {
    this.service.getInternationalTours().subscribe(
      (response: InternationalTour[]) => {
        this.internationalTours = response;
        console.log(this.internationalTours);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getInternationalTour(id: number) {
    this.service.getInternationalTour(this.id).subscribe(
      (data) => {
        console.log(data);
        this.internationalTour = data;

        this.paymentAmount3 = JSON.stringify(this.internationalTour.price);

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
