import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { CardComponent } from './card/card/card.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { EnregistrementCommandeTypePopupComponent } from './enregistrement-commande-type-popup/enregistrement-commande-type-popup.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PanierValideComponent } from './panier-valide/panier-valide.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeService } from "./_services/home.service";
import { authInterceptorProviders } from './_helpers/auth.interceptor';


import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardComponent,
    PanierComponent,
    ConfirmationPopupComponent,
    EnregistrementCommandeTypePopupComponent,
    PanierValideComponent,
    SearchBarComponent,
    AddToCartButtonComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  providers: [
    authInterceptorProviders,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
