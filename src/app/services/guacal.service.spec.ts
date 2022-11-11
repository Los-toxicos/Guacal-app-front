import { TestBed } from '@angular/core/testing';

import { GuacalService } from './guacal.service';

describe('GuacalService', () => {
  let service: GuacalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuacalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
