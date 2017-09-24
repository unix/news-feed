import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { DetailService } from './detail.service'

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss'],
  providers: [DetailService],
})
export class MainDetailComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private detailService: DetailService) {
  }
  
  public article: any
  
  getDetail(id: string) {
    this.detailService.getDetail(id)
      .subscribe(
        res => {
          this.article = res
        },
      )
  }
  
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      const id = params['id']
      if (id) this.getDetail(id)
    })
  }
  
}
