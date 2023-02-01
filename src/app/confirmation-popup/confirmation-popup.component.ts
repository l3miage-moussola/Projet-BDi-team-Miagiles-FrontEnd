import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  EnregistrementCommandeTypePopupComponent
} from "../enregistrement-commande-type-popup/enregistrement-commande-type-popup.component";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent {
  constructor(private dialogRef : MatDialog) {}
  openDialogEnregistrementCommandeType(){
    this.dialogRef.open(EnregistrementCommandeTypePopupComponent);
  }


  enregistrerCommandeType(): void{
    this.openDialogEnregistrementCommandeType();
  }

  public validerPanier() :void{
    this.dialogRef.closeAll();


  }
}
