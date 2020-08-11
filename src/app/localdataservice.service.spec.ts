import { TestBed } from '@angular/core/testing';

import { LocaldataserviceService } from './localdataservice.service';

describe('LocaldataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocaldataserviceService = TestBed.get(LocaldataserviceService);
    expect(service).toBeTruthy();
  });
});
