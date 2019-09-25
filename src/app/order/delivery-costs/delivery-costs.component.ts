import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() valueItems: number;
  @Input() valueDelivery: number;

  constructor() { }

  ngOnInit() { }

  total(): number {
    return this.valueDelivery + this.valueItems;
  }
}
