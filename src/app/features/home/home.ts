import { Component } from '@angular/core';
import { FeatureDescription } from "./components/feature-description/feature-description";
import { Features } from "./components/features/features";
import { Overview } from "./components/overview/overview";
import { SubmitForm } from "./components/submit-form/submit-form";
import { Welcome } from './components/welcome/welcome';

@Component({
  selector: 'app-home',
  imports: [
    Welcome,
    Overview,
    Features,
    FeatureDescription,
    SubmitForm
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  protected scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
