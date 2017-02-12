import {Component, OnInit} from '@angular/core'
import {LoginService} from './login.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor (
        private loginService: LoginService
    ){
    }


    login (name: string, pw: string){
        this.loginService.login({
            name: name,
            pw: pw
        })
    }

    ngOnInit (){
    }

}
