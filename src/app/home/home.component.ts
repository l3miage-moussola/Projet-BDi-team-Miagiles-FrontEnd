import {Component, OnInit} from '@angular/core';
import {HomeService} from "../_services/home.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listePresentation:any

  first = 0;

  rows = 10;
  constructor(private homeService : HomeService) {
  }
  ngOnInit(){
    this.homeService.getListPresentationTot().subscribe(res=>this.listePresentation=res)
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
    return this.listePresentation ? this.first === (this.listePresentation.length - this.rows): true;
  }

  isFirstPage(): boolean {
    return this.listePresentation ? this.first === 0 : true;
  }
}
