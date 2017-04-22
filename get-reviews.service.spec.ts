/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetReviewsService } from './get-reviews.service';

describe('GetReviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetReviewsService]
    });
  });

  it('should ...', inject([GetReviewsService], (service: GetReviewsService) => {
    expect(service).toBeTruthy();
  }));
});
