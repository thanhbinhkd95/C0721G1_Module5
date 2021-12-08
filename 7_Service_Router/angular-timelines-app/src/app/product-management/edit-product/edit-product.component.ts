import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Router} from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  product: Product;
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const idProduct = +paramMap.get("id");
      this.product = this.productService.findById(idProduct);
      console.log(this.product);
      this.productForm.setValue(this.product);
    });
  }

  ngOnInit(): void {}

  onUpdate() {
    this.productService.updateByProduct(this.productForm.value);
    this.router.navigateByUrl("product");
  }
}
