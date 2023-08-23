import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  
  createPaymentIntent(paymentAmount: number): Observable<any> {
   
    const url = `${this.apiServerUrl}/create-payment-intent`;
    const payload = { amount: paymentAmount };

    return this.http.post(url, payload);

    // return this.http.post(`${this.apiServerUrl}/create-payment-intent`,amount);
  }

 
}
