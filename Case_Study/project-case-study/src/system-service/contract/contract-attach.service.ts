import { ContractAttach } from './../../app/contract/contract-attach';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ContractAttachService {
  private URL_CONATT = "http://localhost:3000/contractAttach";

  constructor(private http: HttpClient) {}
  getAll(): Observable<ContractAttach[] | any> {
    return this.http.get(this.URL_CONATT);
  }
  createContractAttach(item: ContractAttach) {
    return this.http.post(this.URL_CONATT, item);
  }
}
