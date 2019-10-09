import { TestBed } from '@angular/core/testing';

import { DBUtilService } from './dbutil.service';

describe('DBUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBUtilService = TestBed.get(DBUtilService);
    expect(service).toBeTruthy();
  });
});
