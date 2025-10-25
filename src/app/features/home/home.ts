import { Component } from '@angular/core';
import { SubmissionV1 } from "./submission-v1/submission-v1";

@Component({
  selector: 'app-home',
  imports: [SubmissionV1],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
