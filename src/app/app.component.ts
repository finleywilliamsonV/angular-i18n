import { EXAMPLE_ORDER } from './shared/constants/example-order.const';
import { ChangeDetectorRef, Component, ApplicationRef } from '@angular/core';
import { Order, Transaction } from './shared/models/order.model';
import { LanguageService } from './src/app/core/services/language.service';

const SUPPORTED_LANGUAGES = ['en-US', 'pt-BR', 'ko-KR'] as const;
type AvailableLanguage = typeof SUPPORTED_LANGUAGES[number];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  order: Order = EXAMPLE_ORDER;

  /** hacky, avert your eyes */
  reloading: boolean = false;

  constructor(private languageService: LanguageService) {}

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

  /**
   * Gets the language for the application
   */
  get language(): AvailableLanguage {
    return this.languageService.getLanguage();
  }

  /**
   * Sets the language for the application
   */
  set language(newLanguage: AvailableLanguage) {
    this.reloading = true;

    this.languageService.setLanguage(newLanguage);

    setTimeout(() => {
      this.reloading = false;
    });
  }
}
