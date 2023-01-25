import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregistrementCommandeTypePopupComponent } from './enregistrement-commande-type-popup.component';

describe('EnregistrementCommandeTypePopupComponent', () => {
  let component: EnregistrementCommandeTypePopupComponent;
  let fixture: ComponentFixture<EnregistrementCommandeTypePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnregistrementCommandeTypePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnregistrementCommandeTypePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
