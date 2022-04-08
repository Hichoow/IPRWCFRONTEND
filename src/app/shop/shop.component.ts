import {Component, OnInit, ViewChild} from '@angular/core';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public collapsed = true;
  orderFinished = false;

  @ViewChild('productsC')
  productsC: ProductsComponent | any;

  @ViewChild('shoppingCartC')
  shoppingCartC: ShoppingCartComponent | any;

  @ViewChild('ordersC')
  ordersC: OrdersComponent | any;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
}
