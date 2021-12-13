import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceManagerService } from 'src/system-service/service/service-manager.service';
import { ServiceTypeService } from 'src/system-service/service/service-type.service';
import { ServiceType } from '../service-type';

@Component({
  selector: "app-create-service",
  templateUrl: "./create-service.component.html",
  styleUrls: ["./create-service.component.css"],
})
export class CreateServiceComponent implements OnInit {
  serviceForm: FormGroup = new FormGroup({
    service_name: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.pattern("^(DV-)[\\d]{4}$"),
      ])
    ),
    service_area: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.min(0)])
    ),
    service_cost: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.min(0)])
    ),
    service_max_people: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.min(0)])
    ),
    standard_room: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
    description: new FormControl("", Validators.compose([Validators.required])),
    pool_area: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.min(0)])
    ),
    number_floors: new FormControl(
      "",
      Validators.compose([Validators.required, Validators.min(0)])
    ),
    service_type: new FormControl(
      "",
      Validators.compose([Validators.required])
    ),
  });
  serviceTypeArr: ServiceType[];

  validationMessage = {
    service_name: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "pattern", message: "Nhap dung dinh dang DV-XXXX" },
    ],
    number: [
      { type: "required", message: "Bat buoc nhap" },
      { type: "min", message: "Vui long nhap so duong >0" },
    ],
  };

  constructor(
    private router: Router,
    private serviceTypeService: ServiceTypeService,
    private serviceManagerService: ServiceManagerService
  ) {}

  ngOnInit(): void {
    this.serviceTypeService
      .getAll()
      .subscribe((next) => (this.serviceTypeArr = next));
  }

  onCreate() {
    if (this.serviceForm.valid) {
      this.serviceManagerService
        .createService(this.serviceForm.value)
        .subscribe((next) => this.router.navigateByUrl("/service"));
    }
  }
}
