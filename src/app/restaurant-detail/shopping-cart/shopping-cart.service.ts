import {CartItem} from './cart-item.model';
import {MenuItem} from '../menu-item/menu-item.model';

export class ShoppingCartService {

  items: CartItem[] = [];

  clear(): void {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(value => value.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      let addItem: CartItem = new CartItem(item);
      this.items.push(addItem);
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    let total: number = 0;
    for (let item of this.items) {
      total = total + item.value();
    }
    return total;
  }
}
