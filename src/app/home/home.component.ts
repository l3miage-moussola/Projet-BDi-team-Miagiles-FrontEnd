import { Component } from '@angular/core';
import {HomeService} from "../_services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private listPresentation: any;



  constructor(private homeService: HomeService) {

    this.homeService.getListPresentationTot().subscribe(res=>this.listPresentation=res)
  }
  control: any;

}
