import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HomeService, Medicament, PagePresentation, Presentation, PresMed, Produit} from "../_services/home.service";
import {PageEvent} from "@angular/material/paginator";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  dataSource:PagePresentation = {content:[],totalElements:0  };  userMail! : string

  commande!: Commande

  control: any;
  presentations! : Presentation[];
  medicaments ! : Medicament[];
  presmeds !:PresMed[];
  pageSizeOptions = [5, 10, 25, 100];
  length=10;
  pageSize = 10;
  pageIndex=0;
  first = 0;
  rows = 10;

  @Input() quantitesInputNumber: number[]=[];

  constructor(private homeService : HomeService) {
    this.presentations = []
    homeService.getListPresentationTot(this.pageSize,this.pageIndex).subscribe(
        res =>{
          this.dataSource = res;
          this.length = res.totalElements!;
          this.pageSize = res.size!;
          this.pageIndex= res.number!;
      }

  }

  ngOnInit(){

  }

  next() {
    this.first = this.first + this.rows;
  }

  pageChanged(event: PageEvent) {
    this.pageSize=event.pageSize;
    this.pageIndex=event.pageIndex;
    this.updateData(event);
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
