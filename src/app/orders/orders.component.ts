import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop/shop.model";
import {Subscription} from "rxjs";
import { ProductOrders } from '../models/product-orders.model';

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

  constructor(private ecommerceService: ShopService) {
    this.orders = this.ecommerceService.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
      this.orders = this.ecommerceService.ProductOrders;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
    this.ecommerceService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
      this.total = this.ecommerceService.Total;
    });
  }

}
