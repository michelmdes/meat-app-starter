import {Component, OnInit} from "@angular/core"
import {Observable} from "rxjs";
import {RestaurantsService} from "../../restaurants/restaurants.service";
import {ActivatedRoute} from "@angular/router";
import {MenuItem} from "../menu-item/menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus: Observable<any>;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menus = this.restaurantsService.menusOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
