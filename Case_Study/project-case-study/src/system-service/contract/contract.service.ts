import { Contract } from './../../app/contract/contract';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContractService {
  private URL_CONTRACT = "http://localhost:3000/contract";
  constructor(private http: HttpClient) {}
  getAll(): Observable<Contract[] | any> {
    return this.http.get(this.URL_CONTRACT);
  }
  createContract(contract: Contract) {
    return this.http.post(this.URL_CONTRACT, contract);
  }
  findById(id: number): Observable<Contract | any> {
    return this.http.get(this.URL_CONTRACT + "/" + id);
  }
}
