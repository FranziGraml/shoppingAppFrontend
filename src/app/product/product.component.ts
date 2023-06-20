import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../cart.sevice";
import {product} from "../../models/products";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: product
  quantity: number = 1;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  updateCart() {
    this.cartService.updateCart(this.product, this.quantity)
  }

  /*decreaseQuantity() {
    if (this.quantity > 0 ) {
      this.quantity --;
    }
  }

  increaseQuantity() {
    this.quantity ++;
  }*/

}
