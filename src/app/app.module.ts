import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { AsideItemComponent } from './aside/aside-item/aside-item.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';
import { ContextMenuItemComponent } from './context-menu/context-menu-item/context-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ContextMenuComponent,
    AsideItemComponent,
    PlaylistComponent,
    HomeComponent,
    ContextMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
