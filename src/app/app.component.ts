import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as selectors from '@store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
