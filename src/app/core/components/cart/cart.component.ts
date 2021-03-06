import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { isSpinnerActive, getCart } from '@store/selectors';
import { ActivateSpinner } from '@store/actions/spinner.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItemsCounter$ = this.store.select(getCart);

  constructor(
    private store: Store<{}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new ActivateSpinner());
  }
}
