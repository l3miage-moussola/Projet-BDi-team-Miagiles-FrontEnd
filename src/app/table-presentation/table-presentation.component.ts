import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Presentation } from '../Model/presentation';
import {PresentationServiceService} from '../_services/presentation-service.service';

@Component({
  selector: 'app-table-presentation',
  templateUrl: './table-presentation.component.html',
  styleUrls: ['./table-presentation.component.css']
})
export class TablePresentationComponent {
  presentation!: Presentation
  presentationService!: PresentationServiceService
  ngOnInit(): void {}
  get obsPresentations(): Observable<Presentation[]>{
    return this.presentationService.obsPresentation;
  }
  getPresentation(p : Presentation) : void{
    this.presentation=p;
  }
}
