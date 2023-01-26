import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import {HomeService} from "../_services/home.service";




@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  inputs: ['contenuPanier']
})
export class PanierComponent implements OnInit{



  @Input() contenuPanier:any;
  panier:any;

  constructor(private dialogRef : MatDialog, private homeService : HomeService) {
    this.ngOnInit()

  }
  ngOnInit(){
    this.panier = this.homeService.panier;
  }
    openDialog(){
      this.dialogRef.open(ConfirmationPopupComponent)
    }

  /*items = [
    { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
    { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
    { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
  ]; */
  get totalPrice() {
    return this.panier.reduce((total:number, item:any) => total + (item.price * item.quantity), 0);
  }

  validerPanier(): void{
    console.log("test")
    this.openDialog();
  }
}
