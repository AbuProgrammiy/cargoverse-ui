import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-submit-form',
  imports: [
    ReactiveFormsModule,
    InputText,
    Select,
    Textarea
  ],
  templateUrl: './submit-form.html',
  styleUrl: './submit-form.scss'
})
export class SubmitForm {
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    firstName: this.fb.control<string | null>(null),
    lastName: this.fb.control<string | null>(null),
    phoneNumber: this.fb.control<string | null>(null),
    shippingFrom: this.fb.control<string | null>(null),
    shippingTo: this.fb.control<string | null>(null),
    comment: this.fb.control<string | null>(null),
  });

  protected readonly shippingOptions = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];
}
