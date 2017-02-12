import {Injectable} from '@angular/core'
import {IpcRendererService} from '../shared/service/ipcRenderer'


@Injectable()
export class LoginService {

    constructor (
        private ipcRendererService: IpcRendererService
    ){
    }

    login (user: any){
        this.ipcRendererService.api('login', user)
            .then(res =>{
                console.log(res);
            })
    }

}
