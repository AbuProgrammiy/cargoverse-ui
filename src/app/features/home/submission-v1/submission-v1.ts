import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { Submission } from "../../../shared/components/submission/submission";

@Component({
  selector: 'app-submission-v1',
  imports: [
    Button,
    Submission
],
  templateUrl: './submission-v1.html',
  styleUrl: './submission-v1.scss'
})
export class SubmissionV1 {

}
