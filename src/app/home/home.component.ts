import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Commande, HomeService, Medicament, PagePresentation, Presentation, PresMed, Produit} from "../_services/home.service";
import {PageEvent} from "@angular/material/paginator";
import {AuthService} from "../_services/auth.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  dataSource:PagePresentation = { content:[], totalElements:0 };
  userMail! : string

  commande!: Commande
  presentations! : Presentation[];
  pageSizeOptions = [5, 10, 25, 100];
  length=10;
  pageSize = 10;
  pageIndex=0;
  first = 0;
  rows = 10;

  @Input() quantitesInputNumber: number[]=[];

  constructor(private homeService : HomeService , private authService : AuthService) {
    this.presentations = []
    homeService.getListPresentationTot(this.pageSize,this.pageIndex).subscribe(
        res =>{
          this.dataSource = res;
          this.length = res.totalElements!;
          this.pageSize = res.size!;
          this.pageIndex= res.number!;
      })
  }

  ngOnInit(){
    this.homeService.getPanier(this.authService.userMail)
    console.log(this.authService.userMail)
    console.log("panier"+ this.homeService.getPanier(this.authService.userMail))
  }

  pageChanged(event: PageEvent) {
    this.pageSize=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.updateData(event);
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

  private updateData(event: PageEvent) {
    this.homeService.getListPresentationTot(event.pageSize,event.pageIndex).subscribe(res => {
      this.dataSource = res;
      this.length = res.totalElements!;
      this.pageSize = res.size!;
      this.pageIndex= res.number!;
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
