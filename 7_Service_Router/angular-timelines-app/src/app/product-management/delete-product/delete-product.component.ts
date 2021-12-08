import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import id from "date-fns/esm/locale/id/index.js";
import { Product } from "../model/product";
import { ProductService } from "../service/product.service";

@Component({
  selector: "app-delete-product",
  templateUrl: "./delete-product.component.html",
  styleUrls: ["./delete-product.component.css"],
})
export class DeleteProductComponent implements OnInit {
  productObj: Product;

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    const productId = Number(this.activeRouter.snapshot.params.id);
    this.productObj = this.productService.findById(productId);
    console.log(this.productObj);
  }

  ngOnInit(): void {}

  onDelete() {
    let index = Number(this.activeRouter.snapshot.params.id);
    this.productService.deleteById(index);
    this.router.navigateByUrl("product");
  }
}
