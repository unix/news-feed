/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing'
import { LoginService } from './login.service'

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
    })
  })
  
  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service)
      .toBeTruthy()
  }))
})
