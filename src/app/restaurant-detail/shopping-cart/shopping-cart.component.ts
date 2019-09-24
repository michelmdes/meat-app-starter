import {Component, OnInit} from '@angular/core'
import {CartItem} from './cart-item.model';
import {ShoppingCartService} from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total();
  }

  removeItem(item: CartItem): void {
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any): void {
    this.shoppingCartService.addItem(item);
  }

  clearCart(): void {
    this.shoppingCartService.clear();
  }

}
