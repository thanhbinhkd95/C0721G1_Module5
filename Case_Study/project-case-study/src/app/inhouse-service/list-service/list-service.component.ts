import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceManagerService } from 'src/system-service/service/service-manager.service';
import { ServiceManager } from '../service-manager';

@Component({
  selector: "app-list-service",
  templateUrl: "./list-service.component.html",
  styleUrls: ["./list-service.component.css"],
})
export class ListServiceComponent implements OnInit {
  serviceArr: ServiceManager[];
  constructor(
    private router: Router,
    private serviceManagerService: ServiceManagerService
  ) {}

  ngOnInit(): void {
    this.serviceManagerService
      .getAll()
      .subscribe((next) => (this.serviceArr = next));
  }

  showEdit(id: number) {
    this.router.navigate(["service", "edit", id]);
  }
  showDelete(id: number) {
    this.router.navigate(["service", "delete", id]);
  }
}
