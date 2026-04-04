import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api-service';
import { CreateClientRequest } from '../requests/create-client.request';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ApiService {
  public createClient(payload: CreateClientRequest): Observable<ClientModel> {
    return this.httpClient.post<ClientModel>(
      `${this.baseUrl}/${this.clientService}`,
      payload,
    );
  }
}
