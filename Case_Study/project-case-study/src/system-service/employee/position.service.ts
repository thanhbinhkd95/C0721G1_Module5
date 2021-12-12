import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from 'src/app/employee/division';

@Injectable({
  providedIn: "root",
})
export class PositionService {
  private URL_POSITION = "http://localhost:3000/position";
  constructor(private http: HttpClient) {}
  getAll(): Observable<Division[] | any> {
    return this.http.get(this.URL_POSITION);
  }
}
