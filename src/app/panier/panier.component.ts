import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import {HomeService, PresentationPanier} from "../_services/home.service";




@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
  inputs: ['contenuPanier']
})
export class PanierComponent implements OnInit{



  @Input() contenuPanier:any;
  panier : PresentationPanier[];

  constructor(private dialogRef : MatDialog, private homeService : HomeService) {
    this.panier = this.homeService.panier;
    console.log(this.homeService.panier)
    console.log(this.panier)

  }
  ngOnInit(){
    this.panier = this.homeService.panier;
  }
    openDialog(){
      this.dialogRef.open(ConfirmationPopupComponent)
    }
  get totalPrice() {
    return this.panier.reduce((total:number, item:PresentationPanier) => total + (item.prix * item.nbAAjouter), 0);
  }

  validerPanier(): void{
    this.openDialog();
  }


}
