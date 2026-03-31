import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {
  protected features: FeatureModel[] = [
    {
      img: '../../../../../assets/images/globe.jpg',
      text: 'HelWidest routes and delivery point selectionlo'
    },
    {
      img: '../../../../../assets/images/calendar.jpg',
      text: 'Quicker, more reliable transit times and weekly sailings'
    },
    {
      img: '../../../../../assets/images/crane.webp',
      text: 'Direct calls to smaller ports with fewer transshipments'
    },
    {
      img: '../../../../../assets/images/umbrella.jpg',
      text: 'Higher protection from external elements'
    },
    {
      img: '../../../../../assets/images/hand-shake.webp',
      text: 'Tailor Made Approach'
    },
  ];
}

export interface FeatureModel {
  img: string;
  text: string;
}