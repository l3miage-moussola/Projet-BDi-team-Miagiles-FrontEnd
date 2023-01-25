import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent{
  //contenuPanier: list;

  constructor(private dialogRef : MatDialog) {}
    openDialog(){
      this.dialogRef.open(ConfirmationPopupComponent)
    }

  items = [
    { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
    { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
    { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
  ];
  get totalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  validerPanier(): void{
    console.log("test")
    this.openDialog();
  }
}
