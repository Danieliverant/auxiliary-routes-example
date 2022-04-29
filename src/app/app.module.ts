import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
