import { TestBed } from '@angular/core/testing';

import { GoogleReserveService } from './google-reserve.service';

describe('GoogleReserveService', () => {
  let service: GoogleReserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleReserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
