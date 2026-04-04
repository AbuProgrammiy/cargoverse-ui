import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { debounceTime, first } from 'rxjs/operators';
import { ClientService } from '../../shared/services/client-service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [TableModule, ReactiveFormsModule, SelectModule, InputTextModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel implements OnInit {
  private readonly clientService = inject(ClientService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected hasAccess = signal<boolean>(false);
  protected clients = signal<any[]>([]);
  protected totalRecords = signal<number>(0);
  protected loading = signal<boolean>(false);

  // ✅ your dropdown options
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

  // ✅ reactive form
  protected filterForm = this.fb.group({
    firstName: this.fb.control<string | null>(null),
    lastName: this.fb.control<string | null>(null),
    phoneNumber: this.fb.control<string | null>(null),
    shippingFrom: this.fb.control<string | null>(null),
    shippingTo: this.fb.control<string | null>(null),
    comment: this.fb.control<string | null>(null),
  });

  private lastLazyEvent: TableLazyLoadEvent = {
    first: 0,
    rows: 10,
  };

  ngOnInit(): void {
    this.checkUserAccess();

    // ✅ react to ALL filter changes with debounce
    this.filterForm.valueChanges
      .pipe(debounceTime(400), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.loadDataLazy({
          ...this.lastLazyEvent,
          first: 0, // reset pagination on filter change
        });
      });
  }

  private checkUserAccess() {
    const hasAccess = localStorage.getItem('hasAccess');

    if (!hasAccess) {
      this.hasAccess.set(false);
      this.router.navigate(['admin-login']);
      return;
    }

    this.hasAccess.set(true);
  }

  // 🚀 Lazy loading
  protected loadDataLazy(event: TableLazyLoadEvent) {
    if (!event) return;

    this.loading.set(true);
    this.lastLazyEvent = event;

    const formValues = this.filterForm.value;

    const request = {
      first: event.first ?? 0,
      rows: event.rows ?? 10,
      ...this.buildRequest(formValues),
    };

    this.clientService
      .getAll(request)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.clients.set(res.data);
          this.totalRecords.set(res.total);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.clientService.showError();
        },
      });
  }

  // 🧹 remove empty values
  private buildRequest(filters: any) {
    const cleaned: any = {};

    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value !== null && value !== undefined && value !== '') {
        cleaned[key] = value;
      }
    });

    return cleaned;
  }
}
