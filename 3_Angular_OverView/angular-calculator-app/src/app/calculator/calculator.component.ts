import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  numberOne: number;
  numberTwo: number;
  result: any;

  getNumberInputOne(value) {
    this.getNumberInputOne = value;
  }
  getNumberInputTwo(value) {
    this.getNumberInputTwo = value;
  }

  showResult(value) {
    switch (value) {
      case "+":
        this.result =
          Number(this.getNumberInputOne) + Number(this.getNumberInputTwo);
        break;
      case "-":
        this.result =
          Number(this.getNumberInputOne) - Number(this.getNumberInputTwo);
        break;
      case "*":
        this.result =
          Number(this.getNumberInputOne) * Number(this.getNumberInputTwo);
        break;
      default:
        if (Number(this.getNumberInputTwo) == 0) {
          this.result = "Infinity";
          break;
        }
        this.result =
          Number(this.getNumberInputOne) / Number(this.getNumberInputTwo);
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
