import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DivisionService } from 'src/system-service/employee/division.service';
import { EducationService } from 'src/system-service/employee/education.service';
import { EmployeeService } from 'src/system-service/employee/employee.service';
import { PositionService } from 'src/system-service/employee/position.service';
import { Division } from '../division';
import { EducationDegree } from '../education-degree';
import { PositionEmployee } from '../postion-employee';

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    employee_name: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    employee_birthday: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    employee_id_card: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^(KH-)[\\d]{4}$"),
      ])
    ),
    employee_salary: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    employee_phone: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern(
          "^((\\(84\\)\\+(90))|(090)|(091)|(\\(84\\)\\+(91)))[\\d]{7}$"
        ),
      ])
    ),
    employee_email: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.email])
    ),
    employee_address: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    position_id: new FormControl(),
    education_id: new FormControl(),
    division_id: new FormControl(),
  });
  positionArr: PositionEmployee[] = [];
  educationArr: EducationDegree[] = [];
  divisionArr: Division[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private employeeService: EmployeeService,
    private positionService: PositionService,
    private educationService: EducationService,
    private divisionService: DivisionService
  ) {
    this.positionService.getAll().subscribe((next) => {
      this.positionArr = next;
      console.log(this.positionArr);
    });
    this.educationService.getAll().subscribe((next) => {
      this.educationArr = next;
      console.log(this.educationArr);
    });
    this.divisionService.getAll().subscribe((next) => {
      this.divisionArr = next;
      console.log(this.divisionArr);
    });
  }

  ngOnInit(): void {}

  onCreate() {
    if (this.employeeForm.valid) {
      this.employeeService
        .createEmployee(this.employeeForm.value)
        .subscribe((next) => {
          this.router.navigateByUrl("/employee");
        });
    }
  }
  validationMessage = {
    employee_id_card: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "pattern", message: "Nhap dung dinh dang NV-XXXX" },
    ],
    employee_phone: [
      { type: "required", message: "Bat buoc nhap" },
      {
        type: "pattern",
        message:
          "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx",
      },
    ],
    employee_email: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "min", message: "Lon hon 0" },
    ],
  };
}
