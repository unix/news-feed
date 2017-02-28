import {Component, OnInit, OnDestroy} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {Observable, BehaviorSubject, Subscription} from 'rxjs'
import {ListService} from './list.service'
interface Pagination {[key: string]: any}

@Component({
    selector: 'app-main-list',
    templateUrl: './main-list.component.html',
    styleUrls: ['./main-list.component.scss'],
    providers: [ListService]
})
export class MainListComponent implements OnInit, OnDestroy {

    constructor (private listService: ListService,
                 private router: Router){
    }

    public list: any[] = []
    public page: number = 1
    public pagination: BehaviorSubject<number> = new BehaviorSubject<number>(1)
    private paginationSub: Subscription



    goNext (id: string):void{
        this.router.navigate(['/main/list', id])
    }
    loadMore ():void{
        this.pagination.next(this.pagination.getValue() + 1)
    }

    ngOnInit (){
         this.paginationSub = this.pagination
            .filter(page => page > 0)
            .switchMap(page => this.listService.getList(page))
            .subscribe(
                list => this.list.push(...list),
                err => Observable.of<any>([])
            )
    }
    ngOnDestroy (){
        this.paginationSub.unsubscribe()
    }

}
