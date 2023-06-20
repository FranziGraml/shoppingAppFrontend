
import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";
import {product} from "../../models/products";
import {CartService} from "../cart.sevice";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService

  ) {}

  products: product[] = [];

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts().subscribe((resp: any) => {
      this.products = resp;
      console.log("test" + JSON.stringify(resp));
      console.log("products:" + this.products)
    })
  }



}
