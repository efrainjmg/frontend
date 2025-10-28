import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../core/services/catalog.service';
import { PaymentService } from '../../core/services/payment.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private catalogService: CatalogService, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe(data => this.products = data);
  }

  handlePay(product: any) {
    this.paymentService.createPayment({ amount: product.price }).subscribe(payment => {
      alert(`Payment created with traceId: ${payment.traceId}`);
    });
  }
}
