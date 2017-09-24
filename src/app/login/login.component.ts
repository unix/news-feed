import { Component, OnInit } from '@angular/core'
import { LoginService } from './login.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  
  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute) {
  }
  
  
  login(name: string, pw: string) {
    this.loginService.login({
      name: name,
      pw: pw,
    })
      .subscribe(
        next => {
          this.router.navigate(['/main'])
        },
      )
  }
  
  ngOnInit() {
  }
  
}
