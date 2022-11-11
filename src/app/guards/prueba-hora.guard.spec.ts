import { TestBed } from '@angular/core/testing';

import { PruebaHoraGuard } from './prueba-hora.guard';

describe('PruebaHoraGuard', () => {
  let guard: PruebaHoraGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PruebaHoraGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
