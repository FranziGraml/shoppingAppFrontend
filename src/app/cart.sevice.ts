import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {product} from "../models/products";

import {Observable} from "rxjs";
import {cartItem} from "../models/cart-item";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getHeaders() {
    let username = 'user';
    let password = 'password';
    let auth = btoa(`${username}:${password}`);

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + auth
    });
  }

  productsInCart = [];

  updateCart(product: product, quantity: number) {
    let cartItem = {
      product: product,
      quantity: quantity
    }

    return this.http.put ("http://localhost:8080/cart", cartItem, {headers: this.getHeaders()});
  }

}
