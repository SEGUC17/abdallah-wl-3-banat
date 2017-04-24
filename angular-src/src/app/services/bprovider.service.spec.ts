/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BproviderService } from './bprovider.service';

describe('BproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BproviderService]
    });
  });

  it('should ...', inject([BproviderService], (service: BproviderService) => {
    expect(service).toBeTruthy();
  }));
});
