import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CustomerTypeService } from "src/system-service/customer/customer-type.service";
import { CustomerService } from "src/system-service/customer/customer.service";
import { CustomerType } from "../customer-type";

@Component({
  selector: "app-create-customer",
  templateUrl: "./create-customer.component.html",
  styleUrls: ["./create-customer.component.css"],
})
export class CreateCustomerComponent implements OnInit {
  customerTypeArr: CustomerType[];
  customerForm: FormGroup = new FormGroup({
    customer_code: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^(KH-)[\\d]{4}$"),
      ])
    ),
    customer_name: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    customer_birthday: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    customer_gender: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    customer_idCard: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^([0-9]{12})$|^([0-9]{9})$"),
      ])
    ),
    customer_phone: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^((\\(84\\)\\+(90))|(090)|(091)|(\\(84\\)\\+(91)))[\\d]{7}$"
        ),
      ])
    ),
    customer_email: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.email])
    ),
    customer_address: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    customer_type: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
  });

  constructor(
    private http: HttpClient,
    private router: Router,
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService
  ) {}

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

  onCreate() {
    if (this.customerForm.valid) {
      this.customerService.createCustomer(this.customerForm.value).subscribe(
        (next) => {
          console.log(next);
          this.router.navigateByUrl("/customer");
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  validationMessage = {
    customer_code: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "pattern", message: "Nhap dung dinh dang NV-XXXX" },
    ],
    customer_phone: [
      { type: "required", message: "Bat buoc nhap" },
      {
        type: "pattern",
        message:
          "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx",
      },
    ],
    customer_idCard: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "pattern", message: "So CMND gom 9 so hoac 12 so" },
    ],
    customer_email: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "email", message: "Dung dinh dang email" },
    ],
  };
}
