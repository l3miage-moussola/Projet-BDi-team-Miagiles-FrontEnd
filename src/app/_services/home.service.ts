import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

export interface PresentationCommande {
  presentation : bigint,
  commande : bigint
}

export interface Presentation{
  codeCIP7 : number
  libelle : string
  prix : number
  stockLogique : number
  stockPhysique : number

  medicaments : Medicament[]

  showAdd : boolean
}

export interface Commande{
  numeroCommande : bigint,
  isType : boolean,
  nom : string,
  etatCommande : string
}

export interface PresentationDeCommande{
  presentationCommande : PresentationCommande,
  quantite : number
}


export interface Produit{
  presentation: Presentation,
  quantite : number
}

export interface Medicament{
  codeCIS : bigint
  denomination : string
}

export interface PresMed{
  codeCIP7 : bigint
  codeCIS : bigint
}




@Injectable({
  providedIn: 'root'
})
export class HomeService {



  panier ! : Produit[]

  presentations! : Observable<Presentation[]>

  medicaments ! : Observable<Medicament[]>
  presmeds !: Observable<PresMed[]>

  constructor(private http: HttpClient) {
    // this.presentationDeCommandeTest=new PresentationDeCommande()
    this.panier = []
    }

  getListPresentationTot():Observable<Presentation[]> {
    return this.http.get<Presentation[]>("http://129.88.210.58:8080/api/presentations/")

  }

  // private presentationDeCommandeTest: PresentationDeCommande;

  getMeds() : Observable<Medicament[]>{
    return this.http.get<Medicament[]>("/api/meds/")
  }

  getPresMeds() : Observable<PresMed[]>{
    return this.http.get<PresMed[]>("/api/meds/")
  }




  addToCart(produit : Produit) {
    // this.http.post<PresentationDeCommande>('/commandes/{user}/addToCart body',this.presentationDeCommandeTest)
    // var existingItem = this.panier.find(i => i.codeCIP7 === item.codeCIP7);
    // if (existingItem) {
    //   //existingItem.nbAAjouter +=item.nbAAjouter;

    // } else {
    //   this.panier.push(item)
    // }
    // console.log(this.panier)
    this.panier.push(produit);

  }

  search(denom : string) : Observable<Presentation[]>{
    return this.http.get<Presentation[]>("/api/presentations/meds/" + denom)
  }


}
