import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'catalog', loadChildren: () => import('./app/catalog/catalog-module').then(m => m.CatalogModule) },
  { path: 'payment', loadChildren: () => import('./app/payment/payment-module').then(m => m.PaymentModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
