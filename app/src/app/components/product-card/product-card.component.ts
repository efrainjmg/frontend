import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() pay = new EventEmitter<any>();

  onPay() {
    this.pay.emit(this.product);
  }
}
