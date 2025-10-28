import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponent } from './components/catalog-list/catalog-list.component';
import { CatalogDetailComponent } from './components/catalog-detail/catalog-detail.component';

const routes: Routes = [
  { path: '', component: CatalogListComponent },
  { path: ':id', component: CatalogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
