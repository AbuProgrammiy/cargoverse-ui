import { Component } from '@angular/core';
import { FeatureDescription } from './components/feature-description/feature-description';
import { Features } from './components/features/features';
import { Overview } from './components/overview/overview';
import { SubmitForm } from './components/submit-form/submit-form';
import { Welcome } from './components/welcome/welcome';
import { scrollTo } from '../../shared/utils/scroll.utils';

@Component({
  selector: 'app-home',
  imports: [Welcome, Overview, Features, FeatureDescription, SubmitForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  scrollTo = scrollTo;
}
