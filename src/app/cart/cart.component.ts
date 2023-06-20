import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {cartItem} from "../../models/cart-item";
import {CartService} from "../cart.sevice";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: cartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    //this.cartService.getCartItems().subscribe((t => {this.cartItems = t}));
  }

}
