import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
    selector: 'app-main-detail',
    templateUrl: './main-detail.component.html',
    styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent implements OnInit {

    constructor (
        private route: ActivatedRoute,
        private router: Router,
    ){
    }

    ngOnInit (){
        this.route.params.forEach((params: Params) => {
            const id = params['id']
            if (id) console.log(id)
        })
    }

}
