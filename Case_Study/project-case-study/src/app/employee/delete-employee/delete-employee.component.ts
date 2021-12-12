import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/system-service/employee/employee.service';
import { Employee } from '../employee';

@Component({
  selector: "app-delete-employee",
  templateUrl: "./delete-employee.component.html",
  styleUrls: ["./delete-employee.component.css"],
})
export class DeleteEmployeeComponent implements OnInit {
  employeeObj: Employee;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      const id_employee = +paramMap.get("id");
      this.employeeService.findById(id_employee).subscribe((next) => {
        console.log(next);
        try {
          this.employeeObj = next;
        } catch (e) {
          console.log("Errors");
        }
      });
    });
  }

  ngOnInit(): void {}

  onDelete() {
    this.employeeService
      .deleteEmployee(this.employeeObj.id)
      .subscribe((next) => {
        this.router.navigateByUrl("/employee");
      });
  }
}
