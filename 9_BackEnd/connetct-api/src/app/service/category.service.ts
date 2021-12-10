import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../interface/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   private URL_CG = "http://localhost:3000/category"
  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]|any>{
    return  this.http.get(this.URL_CG);

  }
}
