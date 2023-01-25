import { TestBed } from '@angular/core/testing';

import { PresentationServiceService } from './presentation-service.service';

describe('PresentationServiceService', () => {
  let service: PresentationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
