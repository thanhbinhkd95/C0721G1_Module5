import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Product } from "../../interface/product";
import { FormControl, FormGroup } from "@angular/forms";
import { ProductService } from "../../service/product.service";
import { CategoryService } from "../../service/category.service";
import { Category } from "../../interface/category";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  product: Product;
  categoryList: Category[];
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const idProduct = +paramMap.get("id");
      this.productService.findById(idProduct).subscribe((next) => {
        this.product = next;
        this.productForm.setValue(this.product);
        console.log(this.product);
      });
    });
    this.categoryService
      .getAll()
      .subscribe((next) => (this.categoryList = next));
  }

  ngOnInit(): void {}

  onUpdate() {
    this.productService
      .updateProduct(this.productForm.value)
      .subscribe((next) => {
        console.log(next);
        this.router.navigateByUrl("product");
      });
  }
}
