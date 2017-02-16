import {Injectable} from '@angular/core'
import {IpcRendererService} from '../shared/service/ipcRenderer'
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class LoginService {

    constructor (
        private ipcRendererService: IpcRendererService
    ){
    }

    login (user: any): Observable<any> {
        return Observable.fromPromise(this.ipcRendererService.api('login', user))
    }

}
