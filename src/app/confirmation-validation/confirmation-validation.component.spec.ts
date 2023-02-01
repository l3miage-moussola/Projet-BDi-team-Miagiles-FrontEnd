import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationValidationComponent } from './confirmation-validation.component';

describe('ConfirmationValidationComponent', () => {
  let component: ConfirmationValidationComponent;
  let fixture: ComponentFixture<ConfirmationValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
