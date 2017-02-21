/**
 * Created by WittBulter on 2017/2/21.
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MainRoutingModule} from './main.routing'

import {SharedModule} from '../shared/shared.module'

import {MainComponent} from './main.component'
import {MainListComponent} from './main-list/main-list.component'
import {MainDetailComponent} from './main-detail/main-detail.component';
import {MainMenuComponent} from './main-menu/main-menu.component'
import {SanitizePipe} from '../shared/pipe/sanitize'

@NgModule({
    declarations: [
        // SanitizePipe,
        MainComponent,
        MainListComponent,
        MainDetailComponent,
        MainMenuComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        MainRoutingModule
    ],
    exports: [MainComponent],
    providers: [
        SanitizePipe
    ]
})
export class MainModule {
}