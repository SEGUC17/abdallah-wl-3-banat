/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceeditService } from './serviceedit.service';

describe('ServiceeditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceeditService]
    });
  });

  it('should ...', inject([ServiceeditService], (service: ServiceeditService) => {
    expect(service).toBeTruthy();
  }));
});
