import { ToppingInterface } from './topping.interface';

export interface PizzaInterface {
  id?: number;
  name?: string;
  toppings?: ToppingInterface[];
}
