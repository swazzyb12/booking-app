import { TestBed } from '@angular/core/testing';

import { MicrosoftBookingService } from './microsoft-booking.service';

describe('MicrosoftBookingService', () => {
  let service: MicrosoftBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrosoftBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
