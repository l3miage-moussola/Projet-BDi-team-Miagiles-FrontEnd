import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, shareReplay, switchMap} from "rxjs";
import {Presentation} from "../Model/presentation";
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class PresentationServiceService {

  readonly obsPresentation: Observable<Presentation[]>;

  private updatePresentation = new BehaviorSubject<null>( null );
  constructor(private http: HttpClient ) {
    this.obsPresentation = this.updatePresentation.pipe(
      // https://rxjs.dev/api/operators/switchMap
      switchMap( () => this.http.get<Presentation[]>('/api/presentation') ),
      shareReplay(1),
    );
  }
}
