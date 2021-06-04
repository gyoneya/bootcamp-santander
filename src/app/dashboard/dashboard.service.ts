import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://bootcamp-dio.herokuapp.com/bootcamp';

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]> {
    /* o http.get vai na url buscar um array de Stock e converter para Promise */
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
