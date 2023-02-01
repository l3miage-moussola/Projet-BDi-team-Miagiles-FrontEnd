import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(userMail:String,password:String): Observable<any> {
    return this.http.get('/api/utilisateurs/findIfExistUtilisateur?adressMail='+userMail+"&mdp="+password);
  }
}
