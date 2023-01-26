import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  panier:any[];



  constructor(private http: HttpClient) {
    this.panier= [
      { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
      { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
      { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
    ];
  }

  /*addToCart(item: any) {
    const existingItemIndex = this.panier.findIndex(i => i.CIP7 === item.CIP7);
    if (existingItemIndex >= 0) {
      this.panier[existingItemIndex].quantity += item.quantity;
    } else {
      this.panier.push(item);
    }
  }*/
  addToCart(item: any) {
    const existingItem = this.panier.find(i => i.CIP7 === item.CIP7);
    if (existingItem) {
      //existingItem.price=existingItem.price+(existingItem.price/existingItem.quantity);
      existingItem.quantity++;

    } else {
      this.panier.push(item)
    }
  }
  getListPresentationTot(){
    return this.http.get("/listMedicament")
  }
}
