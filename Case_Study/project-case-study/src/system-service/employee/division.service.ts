import { HttpClient } from '@angular/common/http';
import { Division } from './../../app/employee/division';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class DivisionService {
  private URL_DIVISION = "http://localhost:3000/division";
  constructor(private http: HttpClient) {}
  getAll(): Observable<Division[] | any> {
    return this.http.get(this.URL_DIVISION);
  }
}
