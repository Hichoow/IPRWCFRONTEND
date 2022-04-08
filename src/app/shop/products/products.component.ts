import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { ProductOrder } from "../../models/product-order.model";
import { ProductOrders} from "../../models/product-orders.model";
import { Subscription } from "rxjs";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productOrders: ProductOrder[] = [];
  private products: Product[] = [];
  private selectedProductOrder: ProductOrder | any;
  private shoppingCartOrders: ProductOrders = new ProductOrders;
  sub: Subscription = new Subscription;
  productSelected: boolean = false;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }

  addToCart(order: ProductOrder) {
    this.shopService.SelectedProductOrder = order;
    this.selectedProductOrder = this.shopService.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.shopService.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.shopService.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.shopService.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.shopService.getAllProducts()
      .subscribe(
        (products:any) => {
          this.products = products;
          this.products.forEach(product => {
            console.log(product)
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error: any) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.shopService.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.shopService.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.shopService.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }
}
