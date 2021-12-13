
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer/customer';

@Injectable({
  providedIn: "root",
})
export class CustomerService {

  private URL_CUSTOMER = "http://localhost:3000/customer";


  constructor(private http: HttpClient) {}
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.URL_CUSTOMER);
  }
  findById(id: number):Observable<Customer> {
    return this.http.get<Customer>(this.URL_CUSTOMER + "/" + id);
  }
  createCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.URL_CUSTOMER, customer)
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.patch<Customer>(this.URL_CUSTOMER + '/' + customer.id, customer)
  }

  deleteCustomer(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.URL_CUSTOMER + "/" + id)
  }
  find(customerSearch: Customer): Observable<Customer []>{
    if (customerSearch.customer_type.name === undefined){
      return this.http.get<Customer[]>(
        this.URL_CUSTOMER +
          "?" +
          // tìm tên
          "&customer_name_like=" +
          customerSearch.customer_name +
          // tìm ngày sinh
          "&customer_birthday_like=" +
          customerSearch.customer_birthday)

    }
      return this.http.get<Customer[]>(
        this.URL_CUSTOMER +
          "?" +
          // tìm tên
          "&customer_name_like=" +
          customerSearch.customer_name +
          // tìm ngày sinh
          "&customer_birthday_like=" +
          customerSearch.customer_birthday +
          // tìm theo customer type
          "&customer_type.name=" +
          customerSearch.customer_type.name
      );
  }
}
