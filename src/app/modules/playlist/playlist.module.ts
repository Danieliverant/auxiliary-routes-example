import { NgModule } from '@angular/core';
import { PlaylistRoutingModule } from './playlist-routing.module';
import {PlaylistComponent} from "./playlist.component";

@NgModule({
  declarations: [PlaylistComponent],
  imports: [PlaylistRoutingModule],
})
export class PlaylistModule {}
