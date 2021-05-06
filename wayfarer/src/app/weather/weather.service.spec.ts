import { TestBed } from '@angular/core/testing';

import { Weather.TsService } from './weather.ts.service';

describe('Weather.TsService', () => {
  let service: Weather.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Weather.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
