import { TestBed } from '@angular/core/testing';

import { AutenticadorGuard } from './autenticador.guard';

describe('AutenticadorGuard', () => {
  let guard: AutenticadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
