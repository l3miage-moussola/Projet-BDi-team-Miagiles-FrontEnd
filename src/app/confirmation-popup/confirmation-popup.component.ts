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
  openDialog(){
    this.dialogRef.open(EnregistrementCommandeTypePopupComponent)
  }

  enregistrerCommandeType(): void{
    this.openDialog()
  }

}
