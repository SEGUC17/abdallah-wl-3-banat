/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetBproviderService } from './get-bprovider.service';

describe('GetBproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBproviderService]
    });
  });

  it('should ...', inject([GetBproviderService], (service: GetBproviderService) => {
    expect(service).toBeTruthy();
  }));
});
