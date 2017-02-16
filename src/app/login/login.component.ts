import {Component, OnInit} from '@angular/core'
import {LoginService} from './login.service'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor (
        private loginService: LoginService,
        private router: Router,
        private route: ActivatedRoute
    ){
    }


    login (name: string, pw: string){
        this.loginService.login({
            name: name,
            pw: pw
        }).subscribe(
            next =>{
                console.log(next);
            }
        )
    }

    ngOnInit (){
        this.route.params
            .forEach((params: Params) => {
                const session = params['session']
                if (session){
                    this.router.navigate(['/main'])
                }
            })
    }

}
