/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GbdetailsService } from './gbdetails.service';

describe('GbdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GbdetailsService]
    });
  });

  it('should ...', inject([GbdetailsService], (service: GbdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
