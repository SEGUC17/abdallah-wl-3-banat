/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewservicesService } from './viewservices.service';

describe('ViewservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewservicesService]
    });
  });

  it('should ...', inject([ViewservicesService], (service: ViewservicesService) => {
    expect(service).toBeTruthy();
  }));
});
