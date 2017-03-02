import {Component, OnInit} from '@angular/core'
import {MenuService} from './menu.service'
import {Router} from '@angular/router'

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    providers: [MenuService]
})
export class MainMenuComponent implements OnInit {

    constructor (
        private menuService: MenuService,
        private router: Router
    ){
    }

    logout ():void{
        this.menuService.logout()
            .subscribe(
                res =>{
                    this.router.navigate(['/login'])
                }
            )
    }

    ngOnInit (){
    }

}
