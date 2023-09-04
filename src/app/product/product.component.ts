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
  @Input() quantity: number = 0;
  @Input() hide: boolean = false;
 // @Input() amount: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  updateCart() {
    // @ts-ignore
    this.cartService.updateCart(this.product, this.quantity).subscribe();
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;

    }
  }

  increaseQuantity() {
    this.quantity++;

  }

}
