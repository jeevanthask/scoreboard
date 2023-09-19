import { TestBed } from '@angular/core/testing';

import { ScoremarksService } from './scoremarks.service';

describe('ScoremarksService', () => {
  let service: ScoremarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoremarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
