import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected readonly httpClient = inject(HttpClient);
  private readonly messageService = inject(MessageService);
  protected readonly baseUrl = environment.baseUrl;
  protected readonly clientService = environment.clientService;

  public showSuccess(
    summary?: string,
    detail?: string,
    severity?: 'success' | 'info' | 'warn' | 'error',
  ) {
    this.messageService.add({
      severity: severity ?? 'success',
      summary: summary ?? 'Muvaffaqiyat',
      detail: detail ?? 'Muvaffaqiyatli bajarildi',
    });
  }

  public showError(
    summary?: string,
    detail?: string,
    severity?: 'success' | 'info' | 'warn' | 'error',
  ) {
    this.messageService.add({
      severity: severity ?? 'error',
      summary: summary ?? 'Xatolik',
      detail: detail ?? 'Xatolik yuz berdi',
    });
  }
}
