import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceManager } from 'src/app/inhouse-service/service-manager';

@Injectable({
  providedIn: "root",
})
export class ServiceManagerService {
  private URL_SERVICE = "http://localhost:3000/service";

  constructor(private http: HttpClient) {}
  getAll(): Observable<ServiceManager[] | any> {
    return this.http.get(this.URL_SERVICE);
  }
  findById(id: number) {
    return this.http.get(this.URL_SERVICE + "/" + id);
  }
  createService(service: ServiceManager) {
    return this.http.post(this.URL_SERVICE, service);
  }
  updateService(service: ServiceManager) {
    return this.http.put(this.URL_SERVICE + "/" + service.id, service);
  }
  deleteService(id: number) {
    return this.http.delete(this.URL_SERVICE + "/" + id);
  }
}
