import { CustomerType } from './../../app/customer/customer-type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CustomerTypeService {
  private URL_CUSTYPE = "http://localhost:3000/customerType";
  constructor(private http: HttpClient) {}
  getAll(): Observable<CustomerType[] | any> {
    return this.http.get(this.URL_CUSTYPE);
  }
}
