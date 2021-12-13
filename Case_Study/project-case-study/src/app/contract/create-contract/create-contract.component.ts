import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer/customer';
import { Employee } from 'src/app/employee/employee';
import { ServiceManager } from 'src/app/inhouse-service/service-manager';
import { ContractService } from 'src/system-service/contract/contract.service';
import { CustomerService } from 'src/system-service/customer/customer.service';
import { EmployeeService } from 'src/system-service/employee/employee.service';
import { ServiceManagerService } from 'src/system-service/service/service-manager.service';

@Component({
  selector: "app-create-contract",
  templateUrl: "./create-contract.component.html",
  styleUrls: ["./create-contract.component.css"],
})
export class CreateContractComponent implements OnInit {
  customerArr: Customer[];
  employeeArr: Employee[];
  serviceArr: ServiceManager[];
  contractForm: FormGroup = new FormGroup({
    id: new FormControl(),
    contract_start_day: new FormControl(),
    contract_end_day: new FormControl(),
    contract_deposit: new FormControl(),
    contract_total_money: new FormControl(),
    employee: new FormControl(),
    customer: new FormControl(),
    service: new FormControl(),
  });

  constructor(
    private router: Router,
    private contractService: ContractService,
    private employeeService: EmployeeService,
    private customerService: CustomerService,
    private serviceManagerService: ServiceManagerService
  ) {}

  ngOnInit(): void {
    this.employeeService
      .getAll()
      .subscribe((next) => (this.employeeArr = next));
    this.customerService
      .getAll()
      .subscribe((next) => (this.customerArr = next));
    this.serviceManagerService
      .getAll()
      .subscribe((next) => (this.serviceArr = next));
  }

  onCreate() {
    this.contractService.createContract(this.contractForm.value).subscribe(
      (next) => this.router.navigateByUrl("/contract"),
      (error) => console.log("Errors")
    );
  }
}
