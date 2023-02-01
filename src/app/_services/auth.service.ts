import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Utilisateur } from './home.service';
import {Router} from "@angular/router";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userMail ! : string

  isLoggedIN = false

  constructor(private http: HttpClient, private router : Router) {

  }

  async login(userMail:string,password:String): Promise<boolean> {
    // console.log(userMail)
    // let obsUti : Observable<boolean> =this.http.get<boolean>('/api/utilisateurs/findIfExistUtilisateur?adressMail='+userMail+"&mdp="+password);
    //  obsUti.subscribe( e => {
    //   if(e == true){
    //     this.userMail = userMail
    //   }
    //  })

    return await lastValueFrom(this.http.get<boolean>('/api/utilisateurs/findIfExistUtilisateur?adressMail='+userMail+"&mdp="+password)).then( e => {
      if(e == true){
        this.userMail = userMail
      }
      return e
      }
     )

  }


  logout(): void {
    this.isLoggedIN = false
    this.changeRoute("")
  }

  setUserMail(userMail:string){
    this.userMail =userMail
  }

  changeRoute(route:string,){

      this.router.navigate([route])


  }

}
