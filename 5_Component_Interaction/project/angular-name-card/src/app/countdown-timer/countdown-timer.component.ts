import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.css"],
})
export class CountdownTimerComponent implements OnInit {
  constructor() {}
  variable;
  tenNumber: number = 15;

  public updatedCounter: number = 0;

  @Output() countDown: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.countDown.emit(this.tenNumber);
  }

  stop() {
    clearInterval(this.variable);
  }
  reset() {
    clearInterval(this.variable);
    this.tenNumber = 15;
    this.countDown.emit(this.tenNumber);
  }

  start() {
    this.variable = setInterval(() => {
      this.tenNumber--;
      this.countDown.emit(this.tenNumber);
      if (this.tenNumber === 0) {
        clearInterval(this.variable);
      }
    }, 1000);
  }

  counterValueChanged(){

  }
}
