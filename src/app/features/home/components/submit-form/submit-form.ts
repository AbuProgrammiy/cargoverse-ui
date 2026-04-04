import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Textarea } from 'primeng/textarea';
import { ClientService } from '../../../../shared/services/client-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { CreateClientRequest } from '../../../../shared/requests/create-client.request';

@Component({
  selector: 'app-submit-form',
  imports: [ReactiveFormsModule, InputText, Select, Textarea],
  templateUrl: './submit-form.html',
  styleUrl: './submit-form.scss',
})
export class SubmitForm {
  private readonly fb = inject(FormBuilder);
  private readonly clientService = inject(ClientService);
  private readonly destroyRef = inject(DestroyRef);

  protected isLoading = signal<boolean>(false);

  protected readonly form = this.fb.group({
    firstName: this.fb.control<string | null>(null, Validators.required),
    lastName: this.fb.control<string | null>(null, Validators.required),
    phoneNumber: this.fb.control<string | null>(null, Validators.required),
    shippingFrom: this.fb.control<string | null>(null, Validators.required),
    shippingTo: this.fb.control<string | null>(null, Validators.required),
    comment: this.fb.control<string | null>(null),
  });

  protected readonly shippingOptions = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  protected submit() {
    this.isLoading.set(true);
    const request = this.buildRequest();
    
    this.clientService
      .createClient(request)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isLoading.set(false);
        }),
      )
      .subscribe({
        next: (data) => {},
        error: (err) => {
          this.clientService.showError();
        },
      });
  }

  private buildRequest(): CreateClientRequest {
    const form = this.form.getRawValue();

    return {
      firstName: form.firstName ?? '',
      lastName: form.lastName ?? '',
      phonenumber: form.phoneNumber ?? '',
      shippingFrom: form.shippingFrom ?? '',
      shippingTo: form.shippingTo ?? '',
      comment: form.comment ?? '',
    };
  }
}
