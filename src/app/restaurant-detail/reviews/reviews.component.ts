import {Component, OnInit} from "@angular/core"
import {Observable} from "rxjs";
import {RestaurantsService} from "../../restaurants/restaurants.service";

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    //this.restaurantsService.
  }

}
