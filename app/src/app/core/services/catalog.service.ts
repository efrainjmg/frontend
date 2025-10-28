import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const CATALOG_BASE = 'https://10cd1x4fib.execute-api.us-east-1.amazonaws.com/dev';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${CATALOG_BASE}/products`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${CATALOG_BASE}/products`, product);
  }
}
