/**
 * Created by WittBulter on 2017/2/21.
 */
import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {MainRoutingModule} from './main.routing'

import {MainComponent} from './main.component'
import {MainListComponent} from './main-list/main-list.component'
import {MainDetailComponent} from './main-detail/main-detail.component';
import {MainMenuComponent} from './main-menu/main-menu.component'

@NgModule({
    declarations: [
        MainComponent,
        MainListComponent,
        MainDetailComponent,
        MainMenuComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MainRoutingModule
    ],
    exports: [MainComponent],
    providers: []
})
export class MainModule {
}