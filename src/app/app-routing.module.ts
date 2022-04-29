import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AsideComponent} from "./aside/aside.component";
import {ContextMenuComponent} from "./context-menu/context-menu.component";

const routes: Routes = [
  {
    path: '**',
    outlet: 'aside',
    component: AsideComponent
  },
  {
    path: 'menu/:x/:y',
    outlet: 'context',
    component: ContextMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
