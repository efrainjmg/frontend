import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const PAYMENT_BASE = 'https://377kwlxm0l.execute-api.us-east-1.amazonaws.com/dev';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  createPayment(payment: any): Observable<any> {
    return this.http.post<any>(`${PAYMENT_BASE}/payments`, payment);
  }

  getPayment(traceId: string): Observable<any> {
    return this.http.get<any>(`${PAYMENT_BASE}/payments/${traceId}`);
  }
}
