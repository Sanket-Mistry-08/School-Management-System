import { TestBed } from '@angular/core/testing';

import { ProfileHandlerService } from './profile-handler.service';

describe('ProfileHandlerService', () => {
  let service: ProfileHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
