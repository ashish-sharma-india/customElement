import { TestBed } from '@angular/core/testing';

import { HttpAngularService } from './http-angular.service';

describe('HttpAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpAngularService = TestBed.get(HttpAngularService);
    expect(service).toBeTruthy();
  });
});
