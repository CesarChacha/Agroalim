import { TestBed } from '@angular/core/testing';

import { OnlyLoggedGuard } from './only-logged.guard';

describe('OnlyLoggedGuard', () => {
  let guard: OnlyLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
