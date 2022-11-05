import { TestBed } from '@angular/core/testing';

import { QuandlService } from './quandl.service';

describe('QuandlService', () => {
  let service: QuandlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuandlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
