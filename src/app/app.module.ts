import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { AsideItemComponent } from './components/aside/aside-item/aside-item.component';
import { ContextMenuItemComponent } from './components/context-menu/context-menu-item/context-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ContextMenuComponent,
    AsideItemComponent,
    ContextMenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
