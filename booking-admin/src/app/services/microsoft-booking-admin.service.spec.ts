import { TestBed } from '@angular/core/testing';

import { MicrosoftBookingAdminService } from './microsoft-booking-admin.service';

describe('MicrosoftBookingAdminService', () => {
  let service: MicrosoftBookingAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrosoftBookingAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
