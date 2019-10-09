import { TestBed } from '@angular/core/testing';

import { PackageMgmtService } from './package-mgmt.service';

describe('PackageMgmtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackageMgmtService = TestBed.get(PackageMgmtService);
    expect(service).toBeTruthy();
  });
});
