import { Component, OnInit, Input } from '@angular/core';
import { transition, style, animate, trigger } from '@angular/animations';

import { PizzaInterface } from '../../interfaces';

export const DROP_ANIMATION = trigger('drop', [
  transition(':enter', [
    style({ transform: 'translateY(-200px)', opacity: 0 }),
    animate(
      '300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)', opacity: 1 }),
    animate(
      '200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
      style({ transform: 'translateY(-200px)', opacity: 0 })
    ),
  ]),
]);

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  animations: [DROP_ANIMATION],
})
export class PizzaComponent {
  @Input() pizza: PizzaInterface;
}
