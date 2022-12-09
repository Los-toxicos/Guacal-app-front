import { TestBed } from '@angular/core/testing';

import { OperadorAdminGuard } from './operadorAdmin.guard';

describe('OperadorAdminGuard', () => {
  let guard: OperadorAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OperadorAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
