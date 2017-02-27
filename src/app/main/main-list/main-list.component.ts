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

    constructor (private listService: ListService,
                 private router: Router){
    }

    public list: any[] = []
    public page: number = 1

    getList (page: number){
        this.listService.getList(page)
            .subscribe(
                res =>{
                    this.list.push(...res)
                }
            )
    }

    goNext (id: string):void{
        this.router.navigate(['/main/list', id])
    }
    loadMore ():void{
        this.page ++;
        this.getList(this.page)
    }

    ngOnInit (){
        this.getList(this.page)
    }

}
