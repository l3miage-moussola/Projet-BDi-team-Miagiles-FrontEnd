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



  constructor(private homeService: HomeService) {

    //this.listPresentation=this.homeService.getListPresentationTot();
    this.homeService.getListPresentationTot().subscribe(res=>this.listPresentation=res);
    console.log("exemple"+this.listPresentation.data);

  }
  control: any;

}
