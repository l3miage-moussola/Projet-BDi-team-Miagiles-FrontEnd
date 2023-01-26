import {Component, OnInit} from '@angular/core';
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  constructor() {

  }

  control = new FormControl('');
  filteredPresentation: Observable<string[]> | undefined;
  private presentationsSuggestion: string[] =[];

  ngOnInit(): void {
    this.presentationsSuggestion=['Doliprane'];
    this.filteredPresentation = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.presentationsSuggestion.filter((street: string) => this._normalizeValue(street).includes(filterValue));
  }
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
