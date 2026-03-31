import { Component } from '@angular/core';
import { Features } from "./components/features/features";
import { Overview } from "./components/overview/overview";
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-home',
  imports: [
    Welcome,
    Overview,
    Features
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
