import { Directive, HostListener } from '@angular/core'
import { Location } from '@angular/common'

@Directive({
  selector: '[routeBack]',
})
export class BackDirective {
  
  constructor(private location: Location) {
  }
  
  @HostListener('click')
  goBack() {
    this.location.back()
  }
  
}
