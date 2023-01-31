import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup(
    {
      "email":  new FormControl('', [Validators.required, Validators.email]),
      "password": new FormControl('')
    }
  );
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  hide = true;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
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
    }

    return this.form.get("email")?.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    let email = this.form.get("email")?.value;
    let password = this.form.get("password")?.value;

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
