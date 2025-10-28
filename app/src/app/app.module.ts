import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    ProductListComponent,
    ProductCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
