import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiServerUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  
  createPaymentIntent(finalAmount: number): Observable<any> {
   
    const url = `${this.apiServerUrl}/createTrekPayment`;
    // const url = `${this.apiServerUrl}/create-payment-intent`;
    const payload = { amount: finalAmount };

    return this.http.post(url, payload);

    // return this.http.post(`${this.apiServerUrl}/create-payment-intent`,amount);
  }


  createCampingPaymentIntent(finalAmount: number): Observable<any> {
   
    const url = `${this.apiServerUrl}/createCampPayment`;
   
    const payload = { amount: finalAmount };

    return this.http.post(url, payload);

    
  }

  createNationalPaymentIntent(finalAmount: number): Observable<any> {
   
    const url = `${this.apiServerUrl}/createNationalPayment`;
   
    const payload = { amount: finalAmount };

    return this.http.post(url, payload);

   
  }

  createInternationalPaymentIntent(finalAmount: number): Observable<any> {
   
    const url = `${this.apiServerUrl}/createInternationalPayment`;
   
    const payload = { amount: finalAmount };

    return this.http.post(url, payload);

   
  }

 
}
