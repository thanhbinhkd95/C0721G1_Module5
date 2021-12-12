import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerTypeService } from 'src/system-service/customer/customer-type.service';
import { CustomerService } from 'src/system-service/customer/customer.service';
import { CustomerType } from '../customer-type';

@Component({
  selector: "app-edit-customer",
  templateUrl: "./edit-customer.component.html",
  styleUrls: ["./edit-customer.component.css"],
})
export class EditCustomerComponent implements OnInit {
  customerTypeArr: CustomerType[];

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
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
    private customerService: CustomerService,
    private customerTypeService: CustomerTypeService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe((next) => {
      this.customerTypeArr = next;
      console.log(this.customerTypeArr);
      this.activeRouter.paramMap.subscribe((paramMap) => {
        const id_Cus = +paramMap.get("id");
        this.customerService.findById(id_Cus).subscribe((next) => {
          try {
            this.customerForm.setValue(next);
          } catch (e) {
            console.log("errors");
          }
        });
      });
    });
  }

  onUpdate() {
    if (this.customerForm.valid) {
      this.customerService
        .updateCustomer(this.customerForm.value)
        .subscribe((next) => {
          console.log(next + "Form here");
          this.router.navigateByUrl("/customer");
        });
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
