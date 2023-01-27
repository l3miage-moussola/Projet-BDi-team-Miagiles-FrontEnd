import { Component, Input } from '@angular/core';
import {HomeService, Presentation, PresentationPanier} from "../_services/home.service";


@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {

  constructor(private homeService: HomeService){

      }
  @Input() indexOfAddToCartButton: number| undefined;
  @Input() quantity: number=-1;
  @Input() presentationCart: any | undefined;
  presentations! : Presentation[]


addToCart(item:Presentation,quantity:number) {
    this.homeService.addToCart(new PresentationPanier(item,quantity) )

  }


}
