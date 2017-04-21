/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BpServicesService } from './bp-services.service';

describe('BpServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BpServicesService]
    });
  });

  it('should ...', inject([BpServicesService], (service: BpServicesService) => {
    expect(service).toBeTruthy();
  }));
});
