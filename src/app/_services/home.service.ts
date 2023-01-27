import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

/*export interface PresentationCommande {
  @Column(name="presentation")
  @JoinTable(name="pres")
  private long presentation;

  @Column(name="commande")
  @JoinTable(name="commande")
  private long commande;

  public PresentationCommande(codeCIP7presentation:number, long commande) {
  this.presentation = presentation;
  this.commande = commande;
}

public long getCommande() {
  return commande;
}

public void setCommande(long commande) {
  this.commande = commande;
}

public long getPresentation() {
  return presentation;
}

public void setPresentation(long presentation) {
  this.presentation = presentation;
}
}
*/
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

export class PresentationDeCommande {
  constructor() {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
    this.presentationDeCommandeTest=new PresentationDeCommande()
  }


  presentations! : Observable<Presentation[]>


  getListPresentationTot():Observable<Presentation[]> {
    return this.http.get<Presentation[]>("/api/presentations/")

  }
  panier:PresentationPanier[]=[];
  private presentationDeCommandeTest: PresentationDeCommande;






  addToCart(item: PresentationPanier) {
    this.http.post<PresentationDeCommande>('/commandes/{user}/addToCart body',this.presentationDeCommandeTest)
    var existingItem = this.panier.find(i => i.codeCIP7 === item.codeCIP7);
    if (existingItem) {
      existingItem.nbAAjouter +=item.nbAAjouter;

    } else {
      this.panier.push(item)
    }
    console.log(this.panier)

  }


}
