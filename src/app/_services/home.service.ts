import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  panier= [
    { CIP7: 100922, libelle: 'Doliprane',quantity: 2, price: 45.99 },
    { CIP7: 100992, libelle: 'Tramadol',quantity: 6, price: 29.99 },
    { CIP7: 103622, libelle: 'Boite de jsp quoi', quantity: 1, price: 19.99 }
  ];

  constructor() { }
}
