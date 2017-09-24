/**
 * Created by WittBulter on 2017/2/21.
 */
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainComponent } from './main.component'
import { MainListComponent } from './main-list/main-list.component'
import { MainDetailComponent } from './main-detail/main-detail.component'


export const mainRoutes: Routes = [{
  path: '', component: MainComponent,
  children: [{
    path: '', redirectTo: 'list', pathMatch: 'full',
  }, {
    path: 'list', component: MainListComponent,
  }, {
    path: 'list/:id', component: MainDetailComponent,
  }],
}]

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
