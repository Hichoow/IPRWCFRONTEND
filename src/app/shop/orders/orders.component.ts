import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import { ProductOrders } from '../../models/product-orders.model';
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: ProductOrders;
  total: number | any;
  paid: boolean | any;
  sub: Subscription | any;

  constructor(private shopService: ShopService) {
    this.orders = this.shopService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.shopService.OrdersChanged.subscribe(() => {
      this.orders = this.shopService.ProductOrders;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
    this.shopService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.shopService.TotalChanged.subscribe(() => {
      this.total = this.shopService.Total;
    });
  }

}
