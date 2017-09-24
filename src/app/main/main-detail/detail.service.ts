import { Injectable } from '@angular/core'
import { IpcRendererService } from '../../shared/service/ipcRenderer'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class DetailService {
  
  constructor(private ipcRendererService: IpcRendererService) {
  }
  
  getDetail(id: string): Observable<any> {
    return Observable.fromPromise(this.ipcRendererService.api('detail', id))
  }
  
}
