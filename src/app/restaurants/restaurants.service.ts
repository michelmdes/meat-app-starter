import {RestaurantModel} from "./restaurant/restaurant.model";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {MEAT_API} from "../app.api";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {Handler} from "../app.handler";

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) {}

  restaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(Handler.handleError)
  }

  restaurantById(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(Handler.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(Handler.handleError)
  }

}
