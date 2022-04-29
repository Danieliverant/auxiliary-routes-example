import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { PlaylistComponent } from './modules/playlist/playlist.component';
import {
  globalContextMenuItems,
  playlistContextMenuItems,
} from './components/context-menu/context-menu-item/context-menu-item.model';
import { HomeComponent } from './modules/home/home.component';

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
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'playlist',
    loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always', onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
