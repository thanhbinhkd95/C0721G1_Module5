import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from "@angular/forms";
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
    customer_code: new FormControl("", [
      Validators.required,
      Validators.pattern("KH-\\d{4}"),
    ]),
    customer_name: new FormControl("", [Validators.required]),
    customer_birthday: new FormControl("", [
      Validators.required,
      Validators.pattern(
        /^(\d){4}-((0[1-9])|(1[0-2]))-((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))$/
      ),
      this.checkAge,
    ]),
    customer_gender: new FormControl("", Validators.required),
    customer_idCard: new FormControl("", [
      Validators.required,
      Validators.pattern("\\d{9,12}"),
    ]),
    customer_phone: new FormControl("", [
      Validators.required,
      Validators.pattern("(((090)|(091))|((84)(90)|(84)(91)))\\d{7}$"),
    ]),
    customer_email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    customer_address: new FormControl("", [Validators.required]),
    customer_type: new FormControl("", [Validators.required]),
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
          // console.log(next);
          this.router.navigateByUrl("/customer");
        },
        (error) => {
          console.log(error);
        }
      );
    }
    console.log(this.customerForm.value);
  }

  checkAge(abstractControl: AbstractControl): any {
    const dateOfBirth = abstractControl.value;
    const yearBirth = dateOfBirth.substring(0, 4);
    const curYear = new Date().getFullYear();

    return curYear - yearBirth >= 18 ? null : { not18: true };
  }

  // validationMessage = {
  //   customer_code: [
  //     { type: "required", message: "Bat buoc nhap" },
  //     { type: "pattern", message: "Nhap dung dinh dang NV-XXXX" },
  //   ],
  //   customer_phone: [
  //     { type: "required", message: "Bat buoc nhap" },
  //     {
  //       type: "pattern",
  //       message:
  //         "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx",
  //     },
  //   ],
  //   customer_idCard: [
  //     { type: "required", message: "Bat buoc nhap" },
  //     { type: "pattern", message: "So CMND gom 9 so hoac 12 so" },
  //   ],
  //   customer_email: [
  //     { type: "required", message: "Bat buoc nhap" },
  //     { type: "email", message: "Dung dinh dang email" },
  //   ],
  // };
}
