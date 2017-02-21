import {Component, OnInit} from '@angular/core'
import {MenuService} from './menu.service'


@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss'],
    providers: [MenuService]
})
export class MainMenuComponent implements OnInit {

    constructor (){
    }

    ngOnInit (){
    }

}
