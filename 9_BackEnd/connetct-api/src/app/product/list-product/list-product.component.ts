import { Component, OnInit } from '@angular/core';
import { Product } from "../../interface/product";
import { Router } from "@angular/router";
import { ProductService } from "../../service/product.service";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe((next) => (this.products = next));
  }
  ngOnInit(): void {}

  showEdit(id: number) {
    this.router.navigate(["product", "edit", id]);
  }

  showDelete(id: number) {
    this.router.navigate(["product", "delete", id]);
  }
}
