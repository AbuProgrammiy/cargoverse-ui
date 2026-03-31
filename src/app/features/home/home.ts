import { Component } from '@angular/core';
import { FeatureDescription } from "./components/feature-description/feature-description";
import { Features } from "./components/features/features";
import { Overview } from "./components/overview/overview";
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-home',
  imports: [
    Welcome,
    Overview,
    Features,
    FeatureDescription
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
