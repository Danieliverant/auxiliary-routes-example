import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { globalContextMenuItems } from '../../components/context-menu/context-menu-item/context-menu-item.model';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      contextMenuItems: globalContextMenuItems,
    },
    children: [
      {
        path: ':x/:y',
        outlet: 'context-menu',
        component: ContextMenuComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
