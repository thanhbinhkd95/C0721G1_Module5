import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService } from 'src/system-service/customer/customer.service';
import { Customer } from '../customer';

@Component({
  selector: "app-delete-customer",
  templateUrl: "./delete-customer.component.html",
  styleUrls: ["./delete-customer.component.css"],
})
export class DeleteCustomerComponent implements OnInit {
  customerObj: Customer | undefined;
  constructor(
    private customerService: CustomerService,
    private http: HttpClient,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id_Cus = +paramMap.get("id");
      this.customerService.findById(id_Cus).subscribe(next => {
        this.customerObj = next;
      });
    });
  }

  onDelete() {
    this.customerService
      .deleteCustomer(this.customerObj.id)
      .subscribe((next) => {
        this.router.navigateByUrl("/customer");
      });
  }
}
