
import {Component, OnInit} from '@angular/core';
import {HomeService, Presentation} from "../_services/home.service";
import {Observable} from "rxjs";


import { Component } from '@angular/core';
import {HomeService} from "../_services/home.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private listPresentation: any;



  /*constructor(private homeService: HomeService) {

     this.listPresentation=this.homeService.getListPresentationTot();
    //this.homeService.getListPresentationTot().subscribe(res=>this.listPresentation=res);
    console.log("exemple"+this.listPresentation.data);

  }*/
  control: any;



export class HomeComponent implements OnInit {
  private listPresentation: any;
  

  presentations! : Presentation[]


  first = 0;

  rows = 10;
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
}
