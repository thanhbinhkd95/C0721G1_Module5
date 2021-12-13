import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceManagerService } from 'src/system-service/service/service-manager.service';
import { ServiceTypeService } from 'src/system-service/service/service-type.service';
import { ServiceType } from '../service-type';

@Component({
  selector: "app-edit-service",
  templateUrl: "./edit-service.component.html",
  styleUrls: ["./edit-service.component.css"],
})
export class EditServiceComponent implements OnInit {
  serviceForm: FormGroup = new FormGroup({
    id: new FormControl(),
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

  serviceTypeArr: ServiceType[];

  constructor(
    private serviceManagerService: ServiceManagerService,
    private router: Router,
    private serviceTypeService: ServiceTypeService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      const idService = +paramMap.get("id");
      this.serviceTypeService.getAll().subscribe((next) => {
        this.serviceTypeArr = next;
        this.serviceManagerService
          .findById(idService)
          .subscribe((next) => this.serviceForm.setValue(next));
      });
    });
  }

  onUpdate() {
    if (this.serviceForm.valid) {
      this.serviceManagerService
        .updateService(this.serviceForm.value)
        .subscribe((next) => {
          console.log("OK");
          this.router.navigateByUrl("/service");
        });
    }
  }
}
