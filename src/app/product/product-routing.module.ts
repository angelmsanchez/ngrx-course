import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent, PizzaDetailComponent } from './components/';
import { PizzaResolve, PizzaCanActivate } from './guards';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    canActivate: [PizzaCanActivate],
    // resolve: { pizzas: PizzaResolve }
  },
  {
    path: ':id',
    component: PizzaDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PizzaResolve,
    PizzaCanActivate
  ]
})
export class ProductRoutingModule { }
