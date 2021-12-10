import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateProductComponent } from "./product/create-product/create-product.component";
import { EditProductComponent } from "./product/edit-product/edit-product.component";
import { DeleteProductComponent } from "./product/delete-product/delete-product.component";
import { ListProductComponent } from "./product/list-product/list-product.component";

const routes: Routes = [
  { path: "product", component: ListProductComponent },
  { path: "product/create", component: CreateProductComponent },
  { path: "product/edit/:id", component: EditProductComponent },
  { path: "product/delete/:id", component: DeleteProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
