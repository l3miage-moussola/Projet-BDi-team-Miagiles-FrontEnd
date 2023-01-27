import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

export interface Presentation{
  codeCIP7 : number
  libelle : string

  medicaments : string[]
  prix : number
  stockLogique : number
  stockPhysique : number
}
export interface Panier{
  presentations: PresentationPanier[]
}export class PresentationPanier{
  constructor(item:Presentation,quantity:number) {
    this.codeCIP7=item.codeCIP7
    this.libelle=item.libelle
    this.prix=item.prix
    this.stockLogique=item.stockLogique
    this.nbAAjouter=quantity
  }
  codeCIP7 !: number
  libelle !: string
  prix !: number
  stockLogique !: number
  nbAAjouter!: number

}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    /*this.panier= [
      { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
      { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
      { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
    ];*/
  }


  presentations! : Observable<Presentation[]>


  getListPresentationTot():Observable<Presentation[]> {
    return this.http.get<Presentation[]>("/api/presentations/")

  }
  panier:PresentationPanier[]=[];






  addToCart(item: PresentationPanier) {
    var existingItem = this.panier.find(i => i.codeCIP7 === item.codeCIP7);
    if (existingItem) {
      existingItem.nbAAjouter +=item.nbAAjouter;

    } else {
      this.panier.push(item)
    }
    console.log(this.panier)

  }


}
