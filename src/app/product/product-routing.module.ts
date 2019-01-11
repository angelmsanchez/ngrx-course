import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent } from './components/';
import { PizzaResolve } from './guards';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    resolve: {
      pizzas: PizzaResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PizzaResolve
  ]
})
export class ProductRoutingModule { }
