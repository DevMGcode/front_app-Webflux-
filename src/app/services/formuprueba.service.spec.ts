import { TestBed } from '@angular/core/testing';

import { FormupruebaService } from './formuprueba.service';

describe('FormupruebaService', () => {
  let service: FormupruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormupruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
