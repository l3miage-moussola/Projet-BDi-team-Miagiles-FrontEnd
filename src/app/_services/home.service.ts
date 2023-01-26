import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class Presentation{
  codeCIP7 !: bigint
  libelle !: string
  prix! : number
  stockLogique !: number
  stockPhysique! : number
}
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  presentations! : Observable<Presentation[]>

  constructor(private http:HttpClient) {
   }

  getListPresentationTot():Observable<Presentation[]>{
    return this.http.get<Presentation[]>("/api/presentations/")
  }
}
