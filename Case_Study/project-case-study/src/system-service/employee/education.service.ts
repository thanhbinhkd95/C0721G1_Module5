import { HttpClient } from '@angular/common/http';
import { Division } from './../../app/employee/division';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class EducationService {
  private URL_EDUCATION = "http://localhost:3000/education";
  constructor(private http: HttpClient) {}
  getAll(): Observable<Division[] | any> {
    return this.http.get(this.URL_EDUCATION);
  }
}
