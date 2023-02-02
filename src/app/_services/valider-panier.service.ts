import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ValiderPanierService {

  constructor(private http: HttpClient)
  {
  }

  validerPanier(userMail: string, isForced: boolean) : Observable<string>{
    return this.http.get<string>('/api/commandes/validerPanier?userMail='+userMail+'&isForced='+isForced)
  }

  annulerPanier(userMail: string) {
    //@todo : methode du back qui annule le panier

  }
}
