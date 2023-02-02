import { Component } from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {NgOptimizedImage} from '@angular/common'
import { AuthService } from './_services/auth.service';
import { HomeService } from './_services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];

  username?: string;


  constructor( public auth : AuthService, private hs : HomeService) {
  }

  logout(): void {
    this.auth.logout()
    this.hs.panier = []
  }


}
