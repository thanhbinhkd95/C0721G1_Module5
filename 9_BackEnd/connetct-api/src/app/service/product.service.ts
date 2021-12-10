import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "../interface/product";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private URL_PD = "http://localhost:3000/product";
  constructor(private http: HttpClient) {}
  getAll(): any {
    return this.http.get(this.URL_PD);
  }
  createProduct(product: Product) {
    return this.http.post(this.URL_PD, product);
  }
  findById(id: number): Observable<Product | any> {
    return this.http.get(this.URL_PD + "/" + id);
  }
  updateProduct(product: Product) {
    return this.http.put(this.URL_PD + "/" + product.id, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.URL_PD + "/" + id);
  }
}
