import { Component, AfterViewInit, OnInit } from "@angular/core";
import Cart from "../../node_modules/cart/lib/src/index";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "test-sdk";
  public sdkResponse;
  public _cartSDK;
  constructor() {
    this._cartSDK = new Cart("");
  }

  ngOnInit() {
    // this.getCart();
  }

  getCart() {
    this._cartSDK.getCart(true).subscribe((resp) => {
      this.sdkResponse = resp;
    });
  }

  getOrder() {
    this._cartSDK.getOrder(true).subscribe((resp) => {
      this.sdkResponse = resp;
    });
  }
}
