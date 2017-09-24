import { Injectable } from '@angular/core'
import { IpcRendererService } from '../../shared/service/ipcRenderer'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class MenuService {
  
  constructor(private ipcRendererService: IpcRendererService) {
  }
  
  logout(): Observable<any> {
    return Observable.fromPromise(this.ipcRendererService.api('logout'))
  }
  
}
