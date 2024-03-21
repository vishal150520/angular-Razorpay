import { Component } from '@angular/core';

declare var Razorpay: any;

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogapp';

  async payNow(): Promise<void> {
    try {
      console.log('Initiating payment...');
      const response = await this.openRazorpayModal();
      console.log('Razorpay Response:', response);
      console.log('Razorpay Payment ID:', response.razorpay_payment_id);
      console.log('Razorpay Order ID:', response.razorpay_order_id);
      console.log('Razorpay Signature:', response.razorpay_signature);
      // Display a success message to the user or perform further actions
    } catch (error) {
      console.error('Payment failed:', error);
      // Display an error message to the user or handle the failure
    }
  }

  openRazorpayModal(): Promise<any> {
    return new Promise((resolve, reject) => {
      const RazorpayOptions = {
        description: 'Sam',
        currency: 'INR',
        amount: 30000,
        name: 'sai',
        key: 'rzp_test_z9qmdd2P5PyPEU',
        prefills: {
          name: 'jhkjk',
          email: 'hjh1232@gmail.com',
          phone: '343434343'
        },
        theme: {
          color: '#f37254'
        },
        handler: (response: any) => {
          resolve(response);
        },
        modal: {
          ondismiss: () => {
            reject(new Error('Payment dismissed'));
          }
        }
      };

      Razorpay.open(RazorpayOptions);
    });
  }
}
