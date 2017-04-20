/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientsChangePasswordService } from './clients-change-password.service';

describe('ClientsChangePasswordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientsChangePasswordService]
    });
  });

  it('should ...', inject([ClientsChangePasswordService], (service: ClientsChangePasswordService) => {
    expect(service).toBeTruthy();
  }));
});
