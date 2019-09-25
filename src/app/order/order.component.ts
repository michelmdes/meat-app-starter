import {Component, OnInit} from '@angular/core'
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  payments: any[] = [
    {label: 'Dinheiro', value:'DIN'},
    {label: 'Cartão de Crédito', value:'CRED'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Ticket Refeição', value:'REF'}
    ];


  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() { }

  cartItems() {
    return this.orderService.cartItems();
  }

  increaseQtd(item: CartItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQtd(item: CartItem) {
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  totalItems(): number {
    return this.orderService.totalItems();
  }

  deliveryCost(): number {
    return 10;
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear();
    });
    // console.info('Pedido concluido: ' + order);
  }

}
