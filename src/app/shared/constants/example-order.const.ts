import { Order } from '../models/order.model';

/**
 * $localize `:{meaning}|{description}@@{custom_id}:string_to_translate`
 */

export const EXAMPLE_ORDER: Order = [
  {
    date: '12/14/22',
    amount: 12,
    description: $localize`:@@2" Flat Brushes:2" Flat Brushes`,
    price: 8.99,
  },
  {
    date: '12/14/22',
    amount: 4,
    description: $localize`Pads of Watercolor Paper`,
    price: 23.49,
  },
  {
    date: '12/14/22',
    amount: 12,
    description: $localize`Watercolor Palettes`,
    price: 9.99,
  },
  {
    date: '12/14/22',
    amount: 2,
    description: $localize`12 Color Watercolor Paint Set`,
    price: 28.55,
  },
];
