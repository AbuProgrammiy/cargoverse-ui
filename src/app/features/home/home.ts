import { Component } from '@angular/core';
import { Overview } from "./components/overview/overview";
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-home',
  imports: [
    Welcome,
    Overview
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
