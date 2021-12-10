import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router, Routes } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { CategoryService } from "../../service/category.service";
import { Category } from "../../interface/category";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent implements OnInit {
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
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryService
      .getAll()
      .subscribe((next) => (this.categoryList = next));
  }
  onCreate() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value);
      this.productForm.reset();
      this.router.navigateByUrl("/product");
    }
  }

  ngOnInit(): void {}
}
