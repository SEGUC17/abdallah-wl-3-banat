/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AskquestionService } from './askquestion.service';

describe('AskquestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AskquestionService]
    });
  });

  it('should ...', inject([AskquestionService], (service: AskquestionService) => {
    expect(service).toBeTruthy();
  }));
});
