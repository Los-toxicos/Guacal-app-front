import { TestBed } from '@angular/core/testing';

import { SinAutenticarGuard } from './sin-autenticar.guard';

describe('SinAutenticarGuard', () => {
  let guard: SinAutenticarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SinAutenticarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
