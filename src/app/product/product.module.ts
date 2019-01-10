import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent, ListProductsComponent } from './components';
import { reducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    StoreModule.forFeature('products', reducers),
    // EffectsModule.forFeature(effects),
  ],
  declarations: [
    ProductComponent,
    ListProductsComponent,
  ],
})
export class ProductModule { }
