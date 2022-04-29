import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { PlaylistComponent } from './playlist/playlist.component';
import {
  globalContextMenuItems,
  playlistContextMenuItems,
} from './context-menu/context-menu-items.model';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: '**',
    outlet: 'aside',
    component: AsideComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      contextMenuItems: globalContextMenuItems,
    },
    children: [
      {
        path: 'menu/:x/:y',
        outlet: 'context',
        component: ContextMenuComponent,
      },
    ]
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
    data: {
      contextMenuItems: playlistContextMenuItems,
    },
    children: [
      {
        path: 'menu/:x/:y',
        outlet: 'context',
        component: ContextMenuComponent,
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
