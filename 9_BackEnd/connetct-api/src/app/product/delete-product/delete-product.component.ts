import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Product } from "../../interface/product";
import { ProductService } from "../../service/product.service";

@Component({
  selector: "app-delete-product",
  templateUrl: "./delete-product.component.html",
  styleUrls: ["./delete-product.component.css"],
})
export class DeleteProductComponent implements OnInit {
  productObj: Product | undefined;
  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const idProduct = +paramMap.get("id");
      this.productService.findById(idProduct).subscribe((next) => {
        this.productObj = next;
        console.log(this.productObj);
      });
    });
  }
  ngOnInit(): void {}
  onDelete() {
    this.productService.deleteProduct(this.productObj.id).subscribe((next) => {
      console.log(next);
      this.router.navigateByUrl("product");
    });
  }
}
