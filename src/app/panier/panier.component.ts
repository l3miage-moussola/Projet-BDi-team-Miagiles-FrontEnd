import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import { AuthService } from '../_services/auth.service';
import {HomeService, Presentation, Produit} from "../_services/home.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  inputs: ['contenuPanier']
})
export class PanierComponent implements OnInit {


  constructor(private dialogRef: MatDialog, public homeService: HomeService, private auth : AuthService) {
    
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

  validerPanier(): void {
    this.openDialog();
  }
}
