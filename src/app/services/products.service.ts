import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

import { IProduct } from '../models/product';
import { productsUrl } from './urls';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(productsUrl, {
      params: new HttpParams({
        fromObject: {
          limit: 10,
        },
      }),
    }).pipe(delay(500));
  }
}
