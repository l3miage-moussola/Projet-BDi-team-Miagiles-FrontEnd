import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  inputs: ['contenuPanier']
})
export class PanierComponent{


  @Input() contenuPanier:any;


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
    return this.contenuPanier.reduce((total:number, item:any)=>total+item.price)
  }

  validerPanier(): void{
    console.log("test")
    this.openDialog();
  }
}

interface IContenuPanier {
  CIP7: bigint;
  libelle: string;
  quantity: bigint;
  price: number;
}
//var test = new ContenuPanier();

