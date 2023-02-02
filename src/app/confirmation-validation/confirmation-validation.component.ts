import { Component } from '@angular/core';
import {ValiderPanierService} from "../_services/valider-panier.service";
import {AuthService} from "../_services/auth.service";

@Component({
  selector: 'app-confirmation-validation',
  templateUrl: './confirmation-validation.component.html',
  styleUrls: ['./confirmation-validation.component.css']
})
export class ConfirmationValidationComponent {

  constructor(private validerPanierService: ValiderPanierService, private authService :AuthService)
  {
  }

  validerPanier(isForced: boolean) {
    // this.validerPanierService.validerPanier(this.authService.getUserMail(),isForced);
  }

  annulerPanier() {
    //this.validerPanierService.annulerPanier(this.authService.getUserMail());
  }
}
