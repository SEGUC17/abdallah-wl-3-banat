/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetBusinessService } from './get-business.service';

describe('GetBusinessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetBusinessService]
    });
  });

  it('should ...', inject([GetBusinessService], (service: GetBusinessService) => {
    expect(service).toBeTruthy();
  }));
});
