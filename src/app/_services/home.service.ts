import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {firstValueFrom, lastValueFrom, Observable} from "rxjs";

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
  nomCmmande : string | null,
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


export interface Utilisateur{
  adresseMail : string
  motDePasse : string
  prenom : string
}




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  userMail !: string

  commandeObs ! : Observable<Commande>

  commande! : Commande 

  panier ! : Produit[]

  presentations! : Presentation[]

  medicaments ! : Observable<Medicament[]>
  presmeds !: Observable<PresMed[]>

  constructor(private http: HttpClient) {
    // this.presentationDeCommandeTest=new PresentationDeCommande()
    this.panier = []

    }

  

  getListPresentationTot(): void {
    this.http.get<Presentation[]>("/api/presentations/").subscribe( e => {
      this.presentations = e
    })

  }
  
  // private presentationDeCommandeTest: PresentationDeCommande;

  getMeds() : Observable<Medicament[]>{
    return this.http.get<Medicament[]>("/api/meds/")
  }

  getPresMeds() : Observable<PresMed[]>{
    return this.http.get<PresMed[]>("/api/meds/")
  }




  addToCart(produit : Produit, commande : Commande) {
    // this.http.post<PresentationDeCommande>('/commandes/{user}/addToCart body',this.presentationDeCommandeTest)
    // var existingItem = this.panier.find(i => i.codeCIP7 === item.codeCIP7);
    // if (existingItem) {
    //   //existingItem.nbAAjouter +=item.nbAAjouter;

    // } else {
    //   this.panier.push(item)
    // }
    // console.log(this.panier)
    this.panier.push(produit);
    this.http.post<PresentationDeCommande>("/api/commande_pres/addToCart", {presentationCommande : {presentation : produit.presentation.codeCIP7,
                                                                                                    commande : commande.numeroCommande},
                                                                            quantite : produit.quantite} ).subscribe( e => console.log(e))

  }

  search(denom : string) : Observable<Presentation[]>{
    return this.http.get<Presentation[]>("/api/presentations/meds/" + denom)
  }


  async fillPanier(commande : Commande) : Promise<void>{
    console.log("in promise")
    
    await firstValueFrom(this.http.get<PresentationDeCommande[]>('/api/commande_pres/')).then( e =>
      {
        e.forEach( compres => {
          console.log(e)
          if(compres.presentationCommande.commande==commande.numeroCommande){
            let pres : Presentation
            this.getPresentation(compres.presentationCommande.presentation).then( e => {
              //console.log(e)
              this.panier.push({ 
                presentation : e,
                quantite : compres.quantite
              })
            })

          }
        })
      })
  }

  async getPanier(adresseMail : string) : Promise<void>{
    await lastValueFrom(this.http.get<Commande>('api/commandes/getPanier?userMail=' + adresseMail)).then(e => {
      console.log(e)
      this.commande = e
    })
    await this.fillPanier(this.commande)
  }

  async getPresentation(codeCIP7 : bigint): Promise<Presentation>{
    return await lastValueFrom(this.http.get<Presentation>('/api/presentations/' + codeCIP7))
  }

  


}
