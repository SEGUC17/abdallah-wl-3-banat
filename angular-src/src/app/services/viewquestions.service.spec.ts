/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ViewquestionsService } from './viewquestions.service';

describe('ViewquestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewquestionsService]
    });
  });

  it('should ...', inject([ViewquestionsService], (service: ViewquestionsService) => {
    expect(service).toBeTruthy();
  }));
});
