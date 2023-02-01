import { Component, EventEmitter, Input, Output } from '@angular/core';
import {HomeService, Presentation, Produit} from "../_services/home.service";


@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {

  constructor(private homeService: HomeService){

      }
  @Input() show = false
  //@Input() indexOfAddToCartButton: number| undefined;
  //@Input() presentationCart: any | undefined;
  @Input() presentation ! : Presentation

  @Output() produitEvent = new EventEmitter<Produit>;

  quantite! : number;


addToCart(item:Presentation,quantity:number) {
   //this.homeService.addToCart(new PresentationPanier(item,quantity) )
   let produit : Produit = {
    presentation : item,
    quantite : quantity

   }
   this.produitEvent.emit(produit)

   console.log(produit)


  }

}
