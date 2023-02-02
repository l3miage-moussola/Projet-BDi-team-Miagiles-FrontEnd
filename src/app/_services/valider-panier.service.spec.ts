import { TestBed } from '@angular/core/testing';

import { ValiderPanierService } from './valider-panier.service';

describe('ValiderPanierService', () => {
  let service: ValiderPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValiderPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
