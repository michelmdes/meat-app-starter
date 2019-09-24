import {Component, OnInit} from '@angular/core'

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

  constructor() { }

  ngOnInit() { }

}
