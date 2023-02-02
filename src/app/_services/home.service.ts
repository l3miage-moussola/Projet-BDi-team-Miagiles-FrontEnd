import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {firstValueFrom, lastValueFrom, Observable} from "rxjs";

export interface PresentationCommande {
  presentation : bigint,
  commande : number
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

export interface PagePresentation {
  totalElements?: number;
  totalPages?: number;
  size?: number;
  content?: Array<Presentation>;
  number?: number;
  first?: boolean;
  last?: boolean;
  numberOfElements?: number;
  pageable?: PageableObject;
  empty?: boolean;
}

export interface PageableObject {
  offset?: number;
  pageNumber?: number;
  pageSize?: number;
  paged?: boolean;
  unpaged?: boolean;
}

export interface Commande{
  numeroCommande : number,
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

  panier! : Produit[]

  presentations! : Presentation[]

  medicaments ! : Observable<Medicament[]>
  presmeds !: Observable<PresMed[]>

  constructor(private http: HttpClient) {
    this.panier = []
    }

  getListPresentationTot(pageSize:number, pageIndex:number):Observable<PagePresentation> {
    let params = new HttpParams();
    params.append('pageSize', pageSize)
    params.append('page', pageIndex)
    console.log(params)
    return this.http.get<PagePresentation>("/api/presentations/",{params:{pageSize:pageSize,page:pageIndex}})
  }

  // private presentationDeCommandeTest: PresentationDeCommande;

  getMeds() : Observable<Medicament[]>{
    return this.http.get<Medicament[]>("/api/meds/")
  }

  getPresMeds() : Observable<PresMed[]>{
    return this.http.get<PresMed[]>("/api/meds/")
  }




  addToCart(produit : Produit, numCommande : number) {
    this.panier.push(produit);
    this.http.post<PresentationDeCommande>("/api/commande_pres/addToCart", {presentationCommande : {presentation : produit.presentation.codeCIP7,
                                                                                                    commande : numCommande},
                                                                            quantite : produit.quantite} ).subscribe( e => console.log(e))

  }

  search(denom : string , formePharma : string) : Observable<Presentation[]>{
    return this.http.get<Presentation[]>("/api/presentations/findByFiltre?denom=" + denom +"&formePharma="+formePharma)
  }


  async fillPanier(commande : Commande) : Promise<void>{
    console.log("in promise")

    await firstValueFrom(this.http.get<PresentationDeCommande[]>('/api/commande_pres/')).then( e =>
      {
        e.forEach( compres => {
          if(compres.presentationCommande.commande==commande.numeroCommande){
            let pres : Presentation
            this.getPresentation(compres.presentationCommande.presentation).then( e => {
              console.log(e)
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
    console.log("getting panier")
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
