import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-shipping-methods',
  imports: [Button],
  templateUrl: './shipping-methods.html',
  styleUrl: './shipping-methods.scss'
})
export class ShippingMethods {
  protected cardItems: CardItem[] = [
    {
      imageUrl:"../../../../assets/images/truck.jpg",
      label: "Open Transport"
    },
    {
      imageUrl:"../../../../assets/images/classic-car.jpg",
      label: "Enclosed and Classic Car Transport"
    },
    {
      imageUrl:"../../../../assets/images/moving.jpg",
      label: "Seasonal and College Transports"
    },
    {
      imageUrl:"../../../../assets/images/beach.jpg",
      label: "Hawaii Transport"
    },
  ];
}

export interface CardItem {
  imageUrl?: string,
  label?: string;
}