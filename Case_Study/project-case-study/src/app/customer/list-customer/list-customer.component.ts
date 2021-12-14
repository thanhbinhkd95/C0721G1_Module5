import { CustomerType } from './../customer-type';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/system-service/customer/customer.service';
import { Customer } from '../customer';
import { CustomerTypeService } from 'src/system-service/customer/customer-type.service';

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.css"],
})
export class ListCustomerComponent implements OnInit {
  customerArr: Customer[];
  page = 1;
  customerTypeArr: CustomerType[];
  searchForm = new FormGroup({
    customer_name: new FormControl(""),
    customer_birthday: new FormControl(""),
    customer_type: new FormControl(""),
  });

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService
  ) {
    this.customerService.getAll().subscribe(
      (next) => (this.customerArr = next),
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(
      (next) => {
        console.log(next);
        this.customerTypeArr = next;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  showEdit(id: number) {
    this.router.navigate(["customer", "edit", id]);
  }

  showDelete(id: number) {
    this.router.navigate(["customer", "delete", id]);
  }
  // tạo một đối tượng customer để gán dữ liệu của form vào, sau đó gởi qua service
  customerSearch: Customer;
  search() {
    this.customerSearch = this.searchForm.value;
    this.customerService.find(this.customerSearch).subscribe((value) => {
      this.customerArr = value;
    });
  }

  onDelete() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(next => {
      this.ngOnInit();

    });
  }

  idDelete:number;
  mdDelete(id:any) {
    this.idDelete = Number(id);

  };
}
