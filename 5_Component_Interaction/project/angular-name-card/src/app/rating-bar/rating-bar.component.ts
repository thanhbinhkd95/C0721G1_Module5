import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-rating-bar",
  templateUrl: "./rating-bar.component.html",
  styleUrls: ["./rating-bar.component.css"],
})
export class RatingBarComponent implements OnInit, OnChanges {
  // @Input() rating: number = 0;
  // @Input() ratingId: number = 0;
  // @Output() ratingIdChange = new EventEmitter();
  public color = "";
  // public updatedRatingChange: number = 0;

  @Output("rating") rating: EventEmitter<number> = new EventEmitter<number>();
  numberRate: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numberPick = 0;

  constructor() {}

  ngOnChanges(p:any): void {
    p = this.numberRate.findIndex;
    if(p < 3){
      this.color = "red"
    }
  }

  ngOnInit(): void {}

  onMouseOver(items: number) {
    console.log(items);
    this.numberPick = items;
    this.rating.emit(this.numberPick);
  }

  // ratingIdChanged(){
  //   this.ratingIdChange.emit({
  //     id: this.ratingId,
  //     updatedRatingChange: this.updatedRatingChange,
  //   });
  //   this.updatedRatingChange = 0;
  // }
}
