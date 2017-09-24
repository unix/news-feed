import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss'],
})
export class BackComponent {
  
  constructor(private location: Location) {
  }
  
  private returnOnlyOnce: boolean = true
  
  goBack(): void {
    if (!this.returnOnlyOnce) return
    this.location.back()
    this.returnOnlyOnce = false
  }
  
}
