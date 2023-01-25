import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierValideComponent } from './panier-valide.component';

describe('PanierValideComponent', () => {
  let component: PanierValideComponent;
  let fixture: ComponentFixture<PanierValideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierValideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierValideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
