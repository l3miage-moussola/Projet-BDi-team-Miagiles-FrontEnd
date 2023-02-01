import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  EnregistrementCommandeTypePopupComponent
} from "../enregistrement-commande-type-popup/enregistrement-commande-type-popup.component";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ValiderPanierService} from "../_services/valider-panier.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.css']
})
export class ConfirmationPopupComponent {

  private resultatValidation: any;
  private userMail: string;

  constructor(private dialogRef : MatDialog, private http: HttpClient, private validationService : ValiderPanierService, authService: AuthService) {
    this.resultatValidation=[];

    this.userMail = authService.getUserMail();
  }
  openDialogEnregistrementCommandeType(){
    this.dialogRef.open(EnregistrementCommandeTypePopupComponent)
  }


  enregistrerCommandeType(): void{
    this.openDialogEnregistrementCommandeType()
  }

  public validerPanier(isForced:boolean) :void
  {
    this.dialogRef.closeAll();
    this.validationService.validerPanier(this.userMail, isForced).subscribe(res=> this.resultatValidation = res);
    if(!this.resultatValidation.isEmpty())
    {
      this.dialogRef.open(ConfirmationValidationComponent);
    }


  }
}
