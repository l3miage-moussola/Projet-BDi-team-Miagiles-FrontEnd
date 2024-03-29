import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CardComponent } from './card/card/card.component';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { PanierComponent } from './panier/panier.component';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { EnregistrementCommandeTypePopupComponent } from './enregistrement-commande-type-popup/enregistrement-commande-type-popup.component';
import { PanierValideComponent } from './panier-valide/panier-valide.component';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule} from "@angular/material/autocomplete";
import { HomeService } from "./_services/home.service";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { MaterialModule } from './material/material.module';
import {ConfirmationValidationComponent} from "./confirmation-validation/confirmation-validation.component";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //RegisterComponent,
    HomeComponent,
    CardComponent,
    PanierComponent,
    ConfirmationPopupComponent,
    EnregistrementCommandeTypePopupComponent,
    PanierValideComponent,
    SearchBarComponent,
    AddToCartButtonComponent,
    ConfirmationValidationComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [
    authInterceptorProviders,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
