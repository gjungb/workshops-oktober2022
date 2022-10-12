import { Component } from '@angular/core';
import { CartService } from '../shared/cart.service';

/**
 *
 */
@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss'],
})
export class CartCountComponent {
  /**
   *
   */
  count$ = this.cart.count$;

  /**
   * @link {https://angular.io/api/common/I18nPluralPipe}
   */
  readonly mapping: Record<string, string> = {
    '=0': 'No books',
    '=1': 'One book',
    other: '# books',
  };

  /**
   *
   * @param cart
   */
  constructor(private readonly cart: CartService) {}
}
