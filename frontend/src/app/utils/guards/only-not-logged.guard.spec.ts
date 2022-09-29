import { TestBed } from '@angular/core/testing';

import { OnlyNotLoggedGuard } from './only-not-logged.guard';

describe('OnlyNotLoggedGuard', () => {
  let guard: OnlyNotLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyNotLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
