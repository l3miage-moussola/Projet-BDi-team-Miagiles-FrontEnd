import { Component } from '@angular/core';
import {HomeService} from "../_services/home.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listePresentation:any
  constructor(private homeService : HomeService) {
    this.homeService.getListPresentationTot().subscribe(res=>this.listePresentation=res)
  }
  list = [{ cip7 : 1 , prix : 2 , libelle : "test"
  },{ cip7 : 2 , prix : 2 , libelle : "test"
  },{ cip7 : 3 , prix : 2 , libelle : "test"
  }]
}
