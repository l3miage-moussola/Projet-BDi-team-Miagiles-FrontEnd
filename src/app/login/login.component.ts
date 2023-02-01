import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../_services/home.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup(
    {
      "email": new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required])
    }
  );
  isLoggedIn = false;
  @Output() loggedChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = true;

  constructor(private authService: AuthService, private hs : HomeService ) {
  }

  ngOnInit(): void {

  }

  get email() {
    return this.form.get("email");
  }

  get password() {
    return this.form.get("password");
  }

  getErrorMessage() {
    if (this.form.get("email")?.hasError('required')) {
      return 'You must enter a value';
    } else if (this.form.get("password")?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get("email")?.hasError('email') ? 'Not a valid email' : '';
  }

  async onSubmit(): Promise<void> {
    let email = this.form.get("email")?.value;
    let password = this.form.get("password")?.value;

    console.log("avant promesse")
    await this.authService.login(email,password).then(data=>{
        this.isLoggedIn = data
      console.log("data "+data)
      console.log("isLoggedIn ",this.isLoggedIn)
    })
    //this.hs.getPanier(email)
    if(this.isLoggedIn){
      this.authService.changeRoute("/home")
    }




  }

}
