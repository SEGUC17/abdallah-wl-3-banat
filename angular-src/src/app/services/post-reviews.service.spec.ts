/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostReviewsService } from './post-reviews.service';

describe('PostReviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostReviewsService]
    });
  });

  it('should ...', inject([PostReviewsService], (service: PostReviewsService) => {
    expect(service).toBeTruthy();
  }));
});
