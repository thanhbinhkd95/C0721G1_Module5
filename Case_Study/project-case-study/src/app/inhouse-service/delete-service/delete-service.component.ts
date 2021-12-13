import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceManagerService } from 'src/system-service/service/service-manager.service';
import { ServiceManager } from '../service-manager';

@Component({
  selector: "app-delete-service",
  templateUrl: "./delete-service.component.html",
  styleUrls: ["./delete-service.component.css"],
})
export class DeleteServiceComponent implements OnInit {
  serviceObj: ServiceManager;
  constructor(
    private activeRouter: ActivatedRoute,
    private serviceManagerService: ServiceManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      const idService = +paramMap.get("id");
      this.serviceManagerService.findById(idService).subscribe((next) => {
        this.serviceObj = next;
      });
    });
  }

  onDelete() {
    this.serviceManagerService
      .deleteService(this.serviceObj.id)
      .subscribe((next) => {
        this.router.navigateByUrl("/service");
      });
  }
}
