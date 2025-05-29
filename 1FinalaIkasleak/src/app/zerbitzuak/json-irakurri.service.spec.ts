import { TestBed } from '@angular/core/testing';

import { JsonIrakurriService } from './json-irakurri.service';

describe('JsonIrakurriService', () => {
  let service: JsonIrakurriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonIrakurriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
