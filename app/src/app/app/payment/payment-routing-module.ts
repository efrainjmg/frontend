import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payment } from './payment';

const routes: Routes = [{ path: '', component: Payment }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
