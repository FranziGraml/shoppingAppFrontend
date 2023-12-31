import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {CartComponent} from "./cart/cart.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {OrderHistoryComponent} from "./order-history/order-history.component";



const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'product', component:ProductListComponent},
  { path: 'cart', component:CartComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'order-history', component:OrderHistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
