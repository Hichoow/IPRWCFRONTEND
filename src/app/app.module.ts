import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { ProductsComponent } from './shop/products/products.component';
import { OrdersComponent } from './shop/orders/orders.component';
import { ShopComponent } from './shop/shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import {ShopService} from "./shop/shop.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ShoppingCartComponent,
    ProductsComponent,
    OrdersComponent,
    ShopComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ShopService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
