import { Component, AfterViewInit, OnInit } from "@angular/core";
import Cart from "../../node_modules/cart/lib/src/index";
import "@orxe-components/input";
import { ApiService } from "./api.service";

// Cart URl
const cartUrl =
  "https://muag18xj7a.execute-api.us-east-1.amazonaws.com/qa/mock-data/CART_NON_CLP.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "test-sdk";
  public sdkResponse;
  public _cartSDK;
  public selectedAction = "";
  constructor(private service: ApiService) {
    this._cartSDK = Cart.getInstance(cartUrl);
  }

  ngOnInit() {
    // this.getCart();
  }

  getCart() {
    // API call with angular HTTPClient
    this.service.getCart(cartUrl).subscribe((data) => {
      this.sdkResponse = data;
    });

    // // API call with angular HTTP SDK

    // this._cartSDK.getCartByCartId(null).subscribe((resp) => {
    //   this.sdkResponse = resp;
    //   this.selectedAction = "get-cart";
    // });
  }

  getOrder() {
    this._cartSDK.getOrder(true).subscribe((resp) => {
      this.sdkResponse = resp;
      this.selectedAction = "get-order";
    });
  }
}
