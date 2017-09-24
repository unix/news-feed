/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing'
import { ListService } from './list.service'

describe('ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService],
    })
  })
  
  it('should ...', inject([ListService], (service: ListService) => {
    expect(service)
      .toBeTruthy()
  }))
})
