import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimelinesComponent } from "./timelines/timelines.component";
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { CreateProductComponent } from './product-management/create-product/create-product.component';
import { DeleteProductComponent } from './product-management/delete-product/delete-product.component';
import { EditProductComponent } from './product-management/edit-product/edit-product.component';
import { ListProductComponent } from './product-management/list-product/list-product.component';

@NgModule({
  declarations: [AppComponent, TimelinesComponent, YoutubePlaylistComponent, YoutubePlayerComponent, CreateProductComponent, DeleteProductComponent, EditProductComponent, ListProductComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
