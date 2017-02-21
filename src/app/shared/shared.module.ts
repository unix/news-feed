/**
 * Created by WittBulter on 2017/2/21.
 */
import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {IpcRendererService} from './service/ipcRenderer'
import {SanitizePipe} from './pipe/sanitize'

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SanitizePipe
    ],
    exports: [
        SanitizePipe
    ],
    providers: [
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [IpcRendererService]
        };
    }
}