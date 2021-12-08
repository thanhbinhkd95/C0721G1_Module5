import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelinesComponent } from "./timelines/timelines.component";
import { YoutubePlaylistComponent } from "./youtube-playlist/youtube-playlist.component";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "timelines",
    component: TimelinesComponent,
  },
  {
    path: "youtube",
    component: YoutubePlaylistComponent,
    children: [
      {
        path: ":id",
        component: YoutubePlayerComponent,
      },
    ],
  },
  {path: "",},
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
