import { Component, OnInit } from '@angular/core';

import { Order } from '../models/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:Array<Order> = [];

  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.get();
  }

}
