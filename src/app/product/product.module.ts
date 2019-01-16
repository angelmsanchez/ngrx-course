import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import {
  PizzaFormComponent, ListProductsComponent, PizzaComponent,
  PizzaDetailComponent, ToppingsComponent
} from './components';
import * as storeProducts from './store';
import { PizzaService, ToppingService } from './services';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(storeProducts.PRODUCT_FEATURE_SELECTOR, storeProducts.reducers),
    EffectsModule.forFeature(storeProducts.effects),
  ],
  declarations: [
    ListProductsComponent,
    PizzaComponent,
    PizzaDetailComponent,
    PizzaFormComponent,
    ToppingsComponent,
  ],
  providers: [
    PizzaService,
    ToppingService,
  ]
})
export class ProductModule { }
