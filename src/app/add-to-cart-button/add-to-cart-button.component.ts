import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {HomeService, Presentation, Produit} from "../_services/home.service";


@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {


  disabled = true;

  public toggleDisabled(): void {
    if(this.quantite>1){
      this.disabled = !this.disabled;
    }
    
  }

  rateControl
  
  constructor(private homeService: HomeService){
    this.rateControl = new FormControl("", [Validators.min(1)])
      }
  @Input() show = false
  //@Input() indexOfAddToCartButton: number| undefined;
  //@Input() presentationCart: any | undefined;
  @Input() presentation ! : Presentation

  @Output() produitEvent = new EventEmitter<Produit>;

  quantite = 1


addToCart(item:Presentation,quantity:number) {
   //this.homeService.addToCart(new PresentationPanier(item,quantity) )
   let produit : Produit = {
    presentation : item,
    quantite : quantity

   }
   

   this.produitEvent.emit(produit)

  


  }

}
