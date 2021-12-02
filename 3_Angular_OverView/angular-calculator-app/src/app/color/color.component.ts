import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.css"],
})
export class ColorComponent implements OnInit {
  color1?: string;
  color2?: string;
  color3?: string;
  arr = [
    { id: 1, vn: "kiemtra", en: "test" },
    { id: 2, vn: "hoat dong", en: "activity" },
  ];
  pickColor(value1, value2, value3) {
    this.color1 = value1;
    this.color2 = value2;
    this.color3 = value3;
  }

  pickArr(id: number) {
    const index = this.arr.findIndex((word) => word.id === id);
  }

  constructor() {}

  ngOnInit(): void {}
}
