import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceType } from 'src/app/inhouse-service/service-type';

@Injectable({
  providedIn: "root",
})
export class ServiceTypeService {
  private URL_SERVICETYPE = "http://localhost:3000/serviceType";
  constructor(private http: HttpClient) {}
  getAll(): Observable<ServiceType[] | any> {
    return this.http.get(this.URL_SERVICETYPE);
  }
}
