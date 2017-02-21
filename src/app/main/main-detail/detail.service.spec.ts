/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailService } from './detail.service';

describe('DetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailService]
    });
  });

  it('should ...', inject([DetailService], (service: DetailService) => {
    expect(service).toBeTruthy();
  }));
});
