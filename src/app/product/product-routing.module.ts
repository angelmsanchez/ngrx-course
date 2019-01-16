import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductsComponent, PizzaDetailComponent, PizzaFormComponent } from './components/';
import { PizzaResolve, PizzaCanActivate, ToppingCanActivate } from './guards';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
    canActivate: [PizzaCanActivate],
    // resolve: { pizzas: PizzaResolve }
  },
  {
    path: 'new',
    component: PizzaFormComponent,
    canActivate: [ToppingCanActivate],
  },
  {
    path: ':id',
    component: PizzaFormComponent,
    canActivate: [PizzaCanActivate, ToppingCanActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PizzaResolve,
    PizzaCanActivate,
    ToppingCanActivate,
  ]
})
export class ProductRoutingModule { }
