import { Injectable } from '@angular/core';
import {lastValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ValiderPanierService {

  constructor(private http: HttpClient)
  {
  }

  async validerPanier(userMail: string, isForced: boolean) : Promise<number[]>{
    return await lastValueFrom(this.http.get<number[]>('/api/commandes/validerPanier?userMail=' + userMail + '&isForced=' + isForced));
  }

  annulerPanier() {
    //@todo : methode du back qui annule le panier

  }
}
