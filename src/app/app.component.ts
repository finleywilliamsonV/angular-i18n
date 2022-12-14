import { EXAMPLE_ORDER } from './shared/constants/example-order.const';
import { Component } from '@angular/core';
import { Order, Transaction } from './shared/models/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Hello and Welcome!';
  order: Order = EXAMPLE_ORDER;

  constructor() {
    // used for localization at runtime
    this.title = this.localizeTitle();
  }

  /**
   * Localizes a title string to the current locale
   * @param newTitle the new title you would like to localize
   * @returns the localized title
   */
  localizeTitle(newTitle: string = this.title): string {
    return $localize`${newTitle}`;
  }

  /**
   * Gets the subtotal for a given transaction
   * @param transaction the transaction to calculate the subtotal for
   * @returns the subtotal for the transaction
   */
  getSubtotal(transaction: Transaction): number {
    return transaction.amount * transaction.price;
  }

  /**
   * Gets the total for a given order
   * @param order the order to calculate the total for
   * @returns the total for the order
   */
  getTotal(order: Order): number {
    return order.reduce((total: number, transaction: Transaction) => {
      return total + this.getSubtotal(transaction);
    }, 0);
  }
}
