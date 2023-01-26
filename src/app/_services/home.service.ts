import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

export class Presentation{
  codeCIP7 !: bigint
  libelle !: string
  prix! : number
  stockLogique !: number
  stockPhysique! : number
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    this.panier= [
      { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
      { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
      { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
    ];
  }


  presentations! : Observable<Presentation[]>


  getListPresentationTot():Observable<Presentation[]> {
    return this.http.get<Presentation[]>("/api/presentations/")
  }
  panier:any[];






  addToCart(item: any) {
    const existingItem = this.panier.find(i => i.CIP7 === item.CIP7);
    if (existingItem) {
      existingItem.quantity+=item.addQuantity;

    } else {
      this.panier.push(item)
    }
  }


}
