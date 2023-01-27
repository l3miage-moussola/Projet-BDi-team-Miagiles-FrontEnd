import {Component, Input, OnInit} from '@angular/core';
import {HomeService, Presentation} from "../_services/home.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  control: any;

  presentations! : Presentation[]


  first = 0;

  rows = 10;
  @Input() quantity: number=-1;
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
}
