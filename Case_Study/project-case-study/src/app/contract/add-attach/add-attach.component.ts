import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AttachService } from 'src/system-service/contract/attach.service';
import { ContractAttachService } from 'src/system-service/contract/contract-attach.service';
import { ContractService } from 'src/system-service/contract/contract.service';
import { Attach } from '../attach';
import { Contract } from '../contract';

@Component({
  selector: "app-add-attach",
  templateUrl: "./add-attach.component.html",
  styleUrls: ["./add-attach.component.css"],
})
export class AddAttachComponent implements OnInit {
  attachArr: Attach[];
  check: boolean[] = [false, false, false, false, false];
  attachSelect: Attach[] = [];
  quantitySelect: number[] = [];
  contractObj: Contract;
  messageErrors: string;
  contractAttachForm: FormGroup = new FormGroup({
    contract: new FormControl(),
    service_attach: new FormControl(),
    quantity: new FormControl(),
  });
  constructor(
    private router: Router,
    private attachService: AttachService,
    private activeRouter: ActivatedRoute,
    private contractAttachService: ContractAttachService,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      const idContract = +paramMap.get("id");
      this.contractService.findById(idContract).subscribe((next) => {
        this.contractObj = next;
        // console.log(next + "AFter");
        this.contractAttachForm.get("contract").setValue(this.contractObj);
      });
    });
    this.attachService.getAll().subscribe((next) => (this.attachArr = next));
    // this.contractService.getAll().subscribe(next => this.contractArr = next);
  }

  onCreate() {
    if (this.messageErrors == "") {
      this.contractAttachForm.get("service_attach").setValue(this.attachSelect);
      this.contractAttachForm.get("quantity").setValue(this.quantitySelect);
      this.contractAttachService
        .createContractAttach(this.contractAttachForm.value)
        .subscribe((next) => {
          this.router.navigateByUrl("/contractAttach");
        });
    }
  }

  onCheck(items: Attach, check: any) {
    if (check === true) {
      this.attachSelect.push(items);
      console.log(this.quantitySelect[this.attachSelect.indexOf(items)]);
      if (this.messageErrors == "Please tik " + items.attach_service_name) {
        this.messageErrors = "";
      } else if (
        this.quantitySelect[this.attachSelect.indexOf(items)] == undefined
      ) {
        this.messageErrors = "Please input quantity of this attach service ";
      }
    } else {
      this.messageErrors = "Delete quantity please";
      const findIndex = this.attachSelect.findIndex(
        (value) => value.id == items.id
      );
      this.attachSelect.splice(findIndex);
      if (this.quantitySelect[findIndex]) {
        this.quantitySelect.splice(findIndex);
      }
    }
  }

  onInput(value: number, items: Attach) {
    if (this.messageErrors == "Delete quantity please") {
      this.messageErrors = "";
      return;
    }
    if (value < 1) {
      this.messageErrors = "Input must larger 0";
      return;
    }
    let index = this.attachSelect.indexOf(items);
    if (index == -1) {
      this.messageErrors = "Please tik " + items.attach_service_name;
    } else {
      this.quantitySelect[index] = value;
      this.messageErrors = "";
    }
  }
}
