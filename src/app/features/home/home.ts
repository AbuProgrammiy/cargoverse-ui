import { Component } from '@angular/core';
import { SubmissionV1 } from "./submission-v1/submission-v1";
import { ShippingMethods } from "./shipping-methods/shipping-methods";

@Component({
  selector: 'app-home',
  imports: [SubmissionV1, ShippingMethods],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
