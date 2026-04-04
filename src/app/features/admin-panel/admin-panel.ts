import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { ClientService } from '../../shared/services/client-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LazyLoadEvent } from 'primeng/api';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-admin-panel',
  imports: [TableModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel implements OnInit {
  private readonly clientService = inject(ClientService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  protected hasAccess = signal<boolean>(false);
  protected clients = signal<any[]>([]);
  protected totalRecords = signal<number>(0);
  protected loading = signal<boolean>(false);

  private filters: any = {};
  private filterSubject = new Subject<void>();

  ngOnInit(): void {
    this.checkUserAccess();

    // 🔥 debounce filter calls
    this.filterSubject
      .pipe(debounceTime(400), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.loadDataLazy({ first: 0, rows: 10 });
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

  // 🚀 Lazy loading (pagination + filters)
  protected loadDataLazy(event: TableLazyLoadEvent) {
    this.loading.set(true);

    const request = {
      first: event.first ?? 0,
      rows: event.rows ?? 10,
      ...this.buildRequest(this.filters),
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

  private buildRequest(filters: any) {
    const cleaned: any = {};

    Object.keys(filters).forEach((key) => {
      if (filters[key] !== null && filters[key] !== '') {
        cleaned[key] = filters[key];
      }
    });

    return cleaned;
  }

  // 🔍 filter handler with debounce trigger
  protected onFilter(event: Event, field: string) {
    const value = (event.target as HTMLInputElement).value;

    this.filters[field] = value;

    this.filterSubject.next();
  }
}
