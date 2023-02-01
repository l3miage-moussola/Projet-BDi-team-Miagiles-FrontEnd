import { Component } from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {NgOptimizedImage} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  username?: string;


  constructor(private tokenStorageService: TokenStorageService) {
  }

  logout(): void {
    window.location.reload();
  }

  getEvent(val : boolean){
    this.isLoggedIn = val
  }
}
