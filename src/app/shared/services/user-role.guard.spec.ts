import { TestBed } from '@angular/core/testing';

import { UserROleGuard } from './user-role.guard';

describe('UserROleGuard', () => {
  let guard: UserROleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserROleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
