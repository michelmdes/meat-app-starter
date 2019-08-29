import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ROUTES} from "./app.routes";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RestaurantComponent} from "./restaurants/restaurant/restaurant.component";
import {RestaurantsService} from "./restaurants/restaurants.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
