import { Injectable } from '@angular/core';
import Razorpay from 'razorpay';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  private _razorpay: any;

  constructor() {
    this._razorpay = new Razorpay({
      key: 'rzp_test_z9qmdd2P5PyPEU', // Your Razorpay Key ID
      amount: 100, // Example amount (in paise or the smallest currency unit)
      name: 'Your Company Name',
      description: 'Payment Description',
      image: 'assets/logo.png', // Your company logo
      handler: function(response: any) {
        console.log(response);
        alert('Payment Successful!');
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com'
      },
      theme: {
        color: '#F37254'
      }
    } as any);
  }

  open() {
    this._razorpay.open();
  }
}

