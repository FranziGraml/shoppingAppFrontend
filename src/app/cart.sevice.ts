import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {product} from "../models/products";

import {Observable} from "rxjs";
import {productQuantity} from "../models/product-quantity";
import {cart} from "../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    let username = 'f.muster.de';
    let password = '1111';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  productsInCart = [];

  updateCart(product: product, quantity: number) {
    console.log("XXX")
    let productQuantity = {
      product: product,
      quantity: quantity,

    }

    return this.http.put<cart> ("http://localhost:8080/cart", productQuantity, {headers: this.getHeaders()});
  }
  getCarts(): Observable<cart> {
      return this.http.get <cart>("http://localhost:8080/cart", {headers: this.getHeaders()});
     }



}
