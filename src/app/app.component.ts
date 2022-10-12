import { Component } from '@angular/core';
import { CartService } from './shared/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workshops-oktober';

  visible = true;

  books$ = this.cart.books$;

  constructor(private readonly cart: CartService) {}
}
