import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import * as selectors from '@store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor(
    private readonly store: Store<{}>
  ) { }

  ngOnInit(): void {
    this.store.select(selectors.getTypeTheme)
      .subscribe(typeTheme => {
        this.isDarkTheme = typeTheme === 'dark';
      });
  }
}
