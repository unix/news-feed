import {Injectable} from '@angular/core'
import {IpcRendererService} from '../../shared/service/ipcRenderer'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class ListService {

    constructor (
        private ipcRendererService: IpcRendererService
    ){
    }

    getList (page: any): Observable<any> {
        return Observable.fromPromise(this.ipcRendererService.api('list', page))
    }

}
