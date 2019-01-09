import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '@store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private typeTheme: string = 'normal';

  constructor(
    private readonly store: Store<{}>
  ) { }

  onThemeChange(): void {
    this.typeTheme = this.typeTheme === 'dark' ? 'normal' : 'dark';
    this.store.dispatch(new actions.ChangeTheme(this.typeTheme));
  }
}
