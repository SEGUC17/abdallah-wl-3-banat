/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeleteserviceService } from './deleteservice.service';

describe('DeleteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteserviceService]
    });
  });

  it('should ...', inject([DeleteserviceService], (service: DeleteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
