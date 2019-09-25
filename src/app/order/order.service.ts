import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Injectable} from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) {}

  cartItems(): CartItem[] {
    return this.shoppingCartService.items;
  }

  increaseQty(item: CartItem) {
    this.shoppingCartService.increaseQtd(item);
  }

  decreaseQty(item: CartItem) {
    this.shoppingCartService.decreaseQtd(item);
  }

  removeItem(item: CartItem) {
    this.shoppingCartService.removeItem(item);
  }

  totalItems(): number {
    let total: number = 0;
    for (let item of this.cartItems()) {
      total = total + item.value();
    }
    return total;
  }


}
