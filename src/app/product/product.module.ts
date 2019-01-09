import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components';
import { reducers } from 'src/app/product/store';
import { ListProductsComponent } from './components/list-products/list-products.component';


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
