import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {ListService} from './list.service'

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss'],
    providers: [ListService]
})
export class MainListComponent implements OnInit {

    constructor (
        private listService: ListService
    ){
    }
    public list: any[] = []

    getList (page: number){
        this.listService.getList(page)
            .subscribe(
                res =>{
                    this.list.push(...res)
                }
            )
    }

    ngOnInit (){
        this.getList(1)
    }

}
