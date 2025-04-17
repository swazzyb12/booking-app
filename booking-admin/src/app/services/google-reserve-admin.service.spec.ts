import { TestBed } from '@angular/core/testing';

import { GoogleReserveAdminService } from './google-reserve-admin.service';

describe('GoogleReserveAdminService', () => {
  let service: GoogleReserveAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleReserveAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
