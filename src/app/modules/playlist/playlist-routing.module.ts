import { playlistContextMenuItems } from '../../components/context-menu/context-menu-item/context-menu-item.model';
import { ContextMenuComponent } from '../../components/context-menu/context-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: PlaylistComponent,
    data: {
      contextMenuItems: playlistContextMenuItems,
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
export class PlaylistRoutingModule {}
