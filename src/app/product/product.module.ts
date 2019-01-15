import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import {
  PizzaFormComponent, ListProductsComponent, PizzaComponent,
  PizzaDetailComponent
} from './components';
import { reducers, effects } from './store';
import { PizzaService } from './services';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    ListProductsComponent,
    PizzaComponent,
    PizzaDetailComponent,
    PizzaFormComponent,
  ],
  providers: [
    PizzaService
  ]
})
export class ProductModule { }
