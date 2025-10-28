import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing-module';
import { CatalogListComponent } from './components/catalog-list/catalog-list';
import { CatalogDetailComponent } from './components/catalog-detail/catalog-detail';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogDetailComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    HttpClientModule
  ]
})
export class CatalogModule {}
