import { Component, Input } from '@angular/core';
import {HomeService, Presentation} from "../_services/home.service";


@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {

  constructor(private homeService: HomeService){

      }
  @Input() indexOfAddToCartButton: number| undefined;
  @Input() quantity: number | undefined;
  @Input() presentationCart: any | undefined;
  presentations! : Presentation[]


addToCart(item:any) {
    this.homeService.addToCart(item)

  }


}
