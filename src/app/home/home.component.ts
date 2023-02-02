import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  Commande,
  HomeService,
  Medicament,
  PagePresentation,
  Presentation,
  PresMed,
  Produit
} from "../_services/home.service";
import {PageEvent} from "@angular/material/paginator";
import {AuthService} from "../_services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {AddToCartButtonComponent} from "../add-to-cart-button/add-to-cart-button.component";
import {Recherche} from "../search-bar/search-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  dataSource: PagePresentation = {content: [], totalElements: 0};
  userMail!: string

  commande!: Commande
  presentations!: Presentation[];
  pageSizeOptions = [5, 10, 25, 100];
  length = 10;
  pageSize = 10;
  pageIndex = 0;
  first = 0;
  rows = 10;

  @Input() quantitesInputNumber: number[] = [];
  numeroCommande: number = 0;

  constructor(private homeService: HomeService, private authService: AuthService, public dialog: MatDialog) {
    this.presentations = []
    homeService.getListPresentationTot(this.pageSize, this.pageIndex).subscribe(
      res => {
        this.dataSource = res;
        this.length = res.totalElements!;
        this.pageSize = res.size!;
        this.pageIndex = res.number!;
      })

  }

  ngOnInit(){
    if(!this.authService.isLoggedIN){
      let login = localStorage.getItem("login")
        if(login=="true"){
          this.authService.isLoggedIN = true
        }
        let userMail = localStorage.getItem("userMail")
        if(userMail != null){
          this.authService.setUserMail(userMail)
          this.homeService.getPanier(userMail)
        }
    }
  }

  openDialog(pres : Presentation) {
    let dialog = this.dialog.open(AddToCartButtonComponent);
    let instance = dialog.componentInstance
    instance.presentation = pres
    instance.produitEvent.subscribe( e => {
      this.addToCart(e)
    })
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updateData(event);
  }

  showClick(presentation: Presentation): void {
    presentation.showAdd = true
  }

  addToCart(produit: Produit): void {
    console.log(produit)
    this.homeService.addToCart(produit, this.homeService.commande.numeroCommande)
  }

  search(event : string[]) : void {

    this.homeService.search(event[0],event[1]).subscribe( res =>{
      this.dataSource.content = res
    }
    )
  }

  private updateData(event: PageEvent) {
    this.homeService.getListPresentationTot(event.pageSize, event.pageIndex).subscribe(res => {
      this.dataSource = res;
      this.length = res.totalElements!;
      this.pageSize = res.size!;
      this.pageIndex = res.number!;
    })

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
