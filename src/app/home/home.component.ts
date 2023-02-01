import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from '../_services/auth.service';
import {Commande, HomeService, Medicament, Presentation, PresMed, Produit, Utilisateur} from "../_services/home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  userMail! : string

  commande!: Commande

  control: any;

  presentations! : Presentation[];
  medicaments ! : Medicament[];
  presmeds !:PresMed[];


  first = 0;

  rows = 10;




  @Input() quantitesInputNumber: number[]=[];



  constructor(private homeService : HomeService, private auth : AuthService) {

  }
  ngOnInit(){

  }


  next() {
    this.first = this.first + this.rows;
  }

  pageChanged(event: PageEvent) {

  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.presentations ? this.first === (this.presentations.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.presentations ? this.first === 0 : true;
  }

  showClick(presentation : Presentation) : void{
   presentation.showAdd = true
  }

  addToCart(produit : Produit): void{
    this.homeService.addToCart(produit, this.commande)
    console.log(produit)
  }

  search(denom : string) : void {
    this.homeService.search(denom).subscribe( res =>{
      this.presentations = res
    }
    )
  }


  // async getPanier(): Promise<void>{
  //   await this.homeService.getPanier(this.userMail);
  //   this.commande = this.homeService.commande

  //   await this.fillPanier()
  // }

  // async fillPanier() : Promise<void>{
  //   await this.homeService.fillPanier(this.commande)
    
  // }
}
