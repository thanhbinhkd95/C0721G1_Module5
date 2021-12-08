import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimelinesComponent } from "./timelines/timelines.component";
import { YoutubePlaylistComponent } from "./youtube-playlist/youtube-playlist.component";
import { YoutubePlayerComponent } from "./youtube-player/youtube-player.component";
import { CommonModule } from "@angular/common";
import { ListProductComponent } from "./product-management/list-product/list-product.component";
import { CreateProductComponent } from "./product-management/create-product/create-product.component";
import { EditProductComponent } from "./product-management/edit-product/edit-product.component";
import { DeleteProductComponent } from "./product-management/delete-product/delete-product.component";
import { ListWordComponent } from "./list-word/list-word.component";
import { DetailWordComponent } from "./detail-word/detail-word.component";

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
  { path: "product/list", component: ListProductComponent },
  { path: "product/create", component: CreateProductComponent },
  { path: "product/edit/:id", component: EditProductComponent },
  { path: "product/delete/:id", component: DeleteProductComponent },
  { path: "translate", component: ListWordComponent },
  { path: "translate/:name", component: DetailWordComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
