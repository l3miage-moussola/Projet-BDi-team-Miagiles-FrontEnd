import {Component,  OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import { AuthService } from '../_services/auth.service';
import {HomeService, Produit} from "../_services/home.service";
import {ValiderPanierService} from "../_services/valider-panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  inputs: ['contenuPanier']
})
export class PanierComponent implements OnInit {
  resultat: number[] = []


  constructor(private dialogRef: MatDialog, public homeService: HomeService, private auth : AuthService, private validationService: ValiderPanierService) {

    console.log(this.homeService.panier)
  }

  ngOnInit() {
    if(!this.auth.isLoggedIN){
      let login = localStorage.getItem("login")
      if(login=="true"){
        this.auth.isLoggedIN = true
      }

      let userMail = localStorage.getItem("userMail")
      console.log(userMail)
      if(userMail != null){
        this.auth.setUserMail(userMail)
        this.homeService.getPanier(userMail)
    }
    }
  }

  openDialog() {
    this.dialogRef.open(ConfirmationPopupComponent)
  }

  get totalPrice() {
    return this.homeService.panier.reduce((total: number, item: Produit) => total + (item.presentation.prix * item.quantite), 0);
  }



  async validerPanier(): Promise<void> {
    if (confirm("Voulez vous valider votre panier?")) {
      console.log("validation en cours......")
      await this.validationService.validerPanier(this.auth.userMail, false).then(async res => {
        this.resultat = res
        console.log("REEEEEEEESSSSS" + this.resultat)
        if (this.resultat.length != 0) {
          console.log(this.resultat)
          let affichage:string=''
          this.resultat.forEach(r => affichage +=r.toString())
          if (confirm("les présentation suivantes " + affichage  + "ne sont plus disponibles voulez-vous les valider le panier ?")) {
            await this.validationService.validerPanier(this.auth.userMail, true)
          }
        }
      })

    }
  }
}
