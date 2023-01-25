import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PanierComponent } from './panier/panier.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { EnregistrementCommandeTypePopupComponent } from './enregistrement-commande-type-popup/enregistrement-commande-type-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PanierComponent,
    ConfirmationPopupComponent,
    EnregistrementCommandeTypePopupComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
