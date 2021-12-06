import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-name-card";
  count: number = 0;
  rating: number = 0;

  handleCount(value: number) {
    this.count = value;
  }

  onPickRating(value: number) {
    this.rating = value;
  }
}
