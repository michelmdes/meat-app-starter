import {Component, OnInit} from "@angular/core"
import {RestaurantModel} from "./restaurant/restaurant.model";
import {RestaurantsService} from "./restaurants.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[] = [];

  constructor(private restaurantsServices: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsServices.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

}
