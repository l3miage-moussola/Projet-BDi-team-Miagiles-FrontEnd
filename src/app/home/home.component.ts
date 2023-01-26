import {Component, Input, OnInit} from '@angular/core';
import {HomeService, Presentation} from "../_services/home.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  private listPresentation: any;
  control: any;

  presentations! : Presentation[]


  first = 0;

  rows = 10;
  @Input() indexOfAddToCartButton: number| undefined;
  @Input() quantity: number | undefined;
  constructor(private homeService : HomeService) {
    this.presentations = []
    homeService.getListPresentationTot().subscribe(

      res =>{
        this.presentations = res
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

  addToCart(item:any) {
    this.homeService.addToCart(item)

  }
}
