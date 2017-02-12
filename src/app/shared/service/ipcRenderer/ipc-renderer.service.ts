import {Injectable} from '@angular/core'
declare let electron:any;

@Injectable()
export class IpcRendererService {

    constructor (){
    }
    private ipcRenderer = electron.ipcRenderer

    on (message: string, done){
        return this.ipcRenderer.on(message, done);
    }

    send (message: string, ...args){
        this.ipcRenderer.send(message, args);
    }

    api (action: string, ...args) {
        this.ipcRenderer.send('api', action, ...args);
        return new Promise((resolve, reject) => {
            this.ipcRenderer.once(`${action}reply`, (e, reply, status) =>{
                if (!reply){
                    return reject(status)
                }
                return resolve(reply)
            })
        })
    }

    dialog (action: string, ...args) {
        this.ipcRenderer.send('dialog', action, ...args);
    }

    sendSync (message: string, ...args){
        return this.ipcRenderer.sendSync(message, arguments);
    }
}
