import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";

@Component({
  selector: 'app-submission',
  imports: [
    CardModule,
    InputTextModule,
    Button
],
  templateUrl: './submission.html',
  styleUrl: './submission.scss'
})
export class Submission {

}
