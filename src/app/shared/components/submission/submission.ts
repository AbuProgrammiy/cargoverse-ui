import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-submission',
  imports: [
    CardModule,
    InputTextModule
  ],
  templateUrl: './submission.html',
  styleUrl: './submission.scss'
})
export class Submission {

}
