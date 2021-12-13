import { Component, OnInit } from '@angular/core';
import { ContractAttachService } from 'src/system-service/contract/contract-attach.service';
import { ContractAttach } from '../contract-attach';

@Component({
  selector: "app-list-contract-attach",
  templateUrl: "./list-contract-attach.component.html",
  styleUrls: ["./list-contract-attach.component.css"],
})
export class ListContractAttachComponent implements OnInit {
  contractAttachArr: ContractAttach[];
  constructor(private contractAttachService: ContractAttachService) {}

  ngOnInit(): void {
    this.contractAttachService
      .getAll()
      .subscribe((next) => (this.contractAttachArr = next));
  }
}
