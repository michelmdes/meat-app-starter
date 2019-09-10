import {Component, Input, OnInit} from '@angular/core'
import {RestaurantModel} from '../restaurants/restaurant/restaurant.model';
import {RestaurantsService} from "../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: RestaurantModel
  
  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
