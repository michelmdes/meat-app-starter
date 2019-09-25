import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ROUTES} from './app.routes';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantComponent} from './restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {MenuItemComponent} from './restaurant-detail/menu-item/menu-item.component';
import {ShoppingCartComponent} from './restaurant-detail/shopping-cart/shopping-cart.component';
import {ReviewsComponent} from './restaurant-detail/reviews/reviews.component';
import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
import {OrderComponent} from './order/order.component';
import {FormsModule} from '@angular/forms';
import {InputContainerComponent} from './shared/input-container/input-container.component';
import {RadioPaymentComponent} from './shared/radio-payment/radio-payment.component';
import {OrderItemsComponent} from './order/order-items/order-items.component';
import {OrderService} from './order/order.service';
import {DeliveryCostsComponent} from './order/delivery-costs/delivery-costs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderComponent,
    InputContainerComponent,
    RadioPaymentComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [RestaurantsService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
