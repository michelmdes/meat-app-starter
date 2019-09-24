import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'radio-payment',
  templateUrl: './radio-payment.component.html'
})
export class RadioPaymentComponent implements OnInit {

  @Input() payments: any[];
  value: any;

  constructor() { }

  ngOnInit() { }

  setValue(pay: any) {
    this.value = pay;
  }

}
