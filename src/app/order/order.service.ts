import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Injectable} from '@angular/core';
import {Order} from './order.model';
import {Observable} from 'rxjs';

import {Http, Headers, RequestOptions} from '@angular/http';
import {MEAT_API} from "../app.api";
import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService, private http: Http) {}

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

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    return this.http.post(`${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({headers: headers}))
        .map(response => response.json())
        .map(order => order.id);
  }

  clear() {
    this.shoppingCartService.clear();
  }

}
