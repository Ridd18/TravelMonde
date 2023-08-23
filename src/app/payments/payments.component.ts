import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { loadStripe, Stripe, StripeCardElement, StripeElements } from '@stripe/stripe-js';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent  implements OnInit{



  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  stripe: Stripe  | null = null;
  elements: StripeElements ;
  card: StripeCardElement;

  @ViewChild('cardElement') cardElement?: ElementRef;

  paymentAmount: number;

  constructor(private paymentService: PaymentService) {
    this.initializeStripe();
  }

  async initializeStripe() {
    this.stripe = await loadStripe('pk_test_51KUrCWSGmt3oFQM9Ah2mgrTzlcMx9UUnqZ8icrWhsaKuODRe77YFO3lxWsggBKaJupI8LS6bNYfJdGcmTJ6i5SI400KzD1UABr');
    this.elements = this.stripe!.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  }

  async createPayment() {
    if (!this.card) {
      return;
    }

    const { token, error } = await this.stripe!.createToken(this.card);

    if (token) {
      this.paymentService.createPaymentIntent(this.paymentAmount)
      .subscribe(response => {
        const clientSecret = response.clientSecret;
        console.log(response.clientSecret)
        console.log(clientSecret)
        // Handle the client secret as needed
      });
      console.log(token);
    } else {
      console.error(error);
    }
  }

}
