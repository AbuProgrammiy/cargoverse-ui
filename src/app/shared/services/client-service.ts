import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api-service';
import { CreateClientRequest } from '../requests/create-client.request';
import { Observable } from 'rxjs';
import { ClientModel } from '../models/client.model';
import { GetAllClientsRequest } from '../requests/get-all-clients.request';
import { HttpParams } from '@angular/common/http';
import { TableListModel } from '../models/table-list.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends ApiService {
  public getAll(
    request: GetAllClientsRequest,
  ): Observable<TableListModel<ClientModel>> {
    const params = new HttpParams({
      fromObject: Object.fromEntries(
        Object.entries(request).filter(([_, v]) => v != null),
      ),
    });

    return this.httpClient.get<TableListModel<ClientModel>>(
      `${this.baseUrl}/${this.clientService}`,
      { params },
    );
  }

  public createClient(payload: CreateClientRequest): Observable<ClientModel> {
    return this.httpClient.post<ClientModel>(
      `${this.baseUrl}/${this.clientService}`,
      payload,
    );
  }
}
