import {
  Component, Input, forwardRef,
  ChangeDetectionStrategy, Output, EventEmitter
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ToppingInterface } from '../../interfaces';

const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToppingsComponent),
  multi: true,
};

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrls: ['toppings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PIZZA_TOPPINGS_ACCESSOR],
})
export class ToppingsComponent implements ControlValueAccessor {
  @Input() toppings: ToppingInterface[];
  @Output() changeToppings = new EventEmitter<ToppingInterface[]>();

  value: ToppingInterface[] = [];

  private onTouch: Function;
  private onModelChange: Function;

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: ToppingInterface[]) {
    this.value = value;
  }

  selectTopping(topping: ToppingInterface) {
    this.value = this.existsInToppings(topping) ? this.value.filter(item => item.id !== topping.id) : [...this.value, topping];
    this.changeToppings.emit(this.value);
    this.onTouch();
    this.onModelChange();
  }

  private existsInToppings(topping: ToppingInterface) {
    return this.value.some(val => val.id === topping.id);
  }
}
