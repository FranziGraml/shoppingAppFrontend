import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {productQuantity} from "../../models/product-quantity";
import {CartService} from "../cart.sevice";
import {cart} from "../../models/cart";
import {product} from "../../models/products";
import {OrderService} from "../order.service";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {



  constructor(private cartService: CartService, private orderService: OrderService) { }

  cart?: cart

  ngOnInit() {
    this.cartService.getCarts().subscribe((response) => {
      this.cart = response;
    });
  }

  calculateSum(): number {
    let sum: number = 0;
    for (let i of this.cart!.items) {
      sum += i.product.price * i.quantity;
    }
    return sum;
  }

  closeOrder() {
    this.orderService.addOrder().subscribe()
  }

}


