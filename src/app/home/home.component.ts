import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HomeService, Medicament, Presentation, PresMed, Produit} from "../_services/home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


  control: any;

  presentations! : Presentation[]
  medicaments ! : Medicament[]
  presmeds !:PresMed[]


  first = 0;

  rows = 10;




  @Input() quantitesInputNumber: number[]=[];



  constructor(private homeService : HomeService) {
    this.presentations = []
    homeService.getListPresentationTot().subscribe(
        res =>{
        this.presentations = res.slice(0,10)
      }

    )
  }
  ngOnInit(){

  }


  next() {
    this.first = this.first + this.rows;
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
    this.homeService.addToCart(produit)
  }

  search(denom : string) : void {
    this.homeService.search(denom).subscribe( res =>{
      this.presentations = res
      res.forEach( e =>
        console.log(e.medicaments)
      )
    }
    )
  }
}
