/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BpeditprofileService } from './bpeditprofile.service';

describe('BpeditprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BpeditprofileService]
    });
  });

  it('should ...', inject([BpeditprofileService], (service: BpeditprofileService) => {
    expect(service).toBeTruthy();
  }));
});
