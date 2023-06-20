import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {productQuantity} from "../../models/product-quantity";
import {CartService} from "../cart.sevice";
import {cart} from "../../models/cart";
import {product} from "../../models/products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(private cartService: CartService) { }


  products: product[] = [];

  cart?: cart

  ngOnInit() {
    this.cartService.getCarts().subscribe((response)=>{
      this.cart = response});

  }


}
