import { TestBed } from '@angular/core/testing';

import { CarriageValidatorService } from './carriage-validator.service';

describe('CarriageValidatorService', () => {
  let service: CarriageValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarriageValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
