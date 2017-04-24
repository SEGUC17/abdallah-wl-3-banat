/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnswerqService } from './answerq.service';

describe('AnswerqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswerqService]
    });
  });

  it('should ...', inject([AnswerqService], (service: AnswerqService) => {
    expect(service).toBeTruthy();
  }));
});
