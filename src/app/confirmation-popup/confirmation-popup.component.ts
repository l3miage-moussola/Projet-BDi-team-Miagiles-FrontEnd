import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  EnregistrementCommandeTypePopupComponent
} from "../enregistrement-commande-type-popup/enregistrement-commande-type-popup.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent {
  private VALIDATION_PANIER_API = '/api/commandes/validerPanier?userMail=';
  private resultatValidation: string;

  constructor(private dialogRef : MatDialog, private http: HttpClient, private validationService : ValidationService) {
    this.resultatValidation='';
  }
  openDialogEnregistrementCommandeType(){
    this.dialogRef.open(EnregistrementCommandeTypePopupComponent)
  }


  enregistrerCommandeType(): void{
    this.openDialogEnregistrementCommandeType()
  }

  public validerPanier() :void
  {


    this.dialogRef.closeAll();

    this.validationService.validerPanier(userMail).subscribe(res=> this.resultatValidation = res);
    if(this.resultatValidation.equals("Articles hors-stock"))//this.http.get(this.VALIDATION_PANIER_API + 'nom.prenom@mail.com') /* renvoie autre chose que 'Commande validée'*/
    {
      this.dialogRef.open(Component)
    }


  }
}
