import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { TranslateService } from "../service/translate.service";

@Component({
  selector: "app-detail-word",
  templateUrl: "./detail-word.component.html",
  styleUrls: ["./detail-word.component.css"],
})
export class DetailWordComponent implements OnInit {
  mean: string;
  word: string;

  // constructor(private translateService: TranslateService, activeRouter: ActivatedRoute, router: Router) {
  //   this.word = activeRouter.snapshot.params.word;
  //   console.log(this.word);
  //   this.mean = this.translateService.getMean(this.word);
  // }

  constructor(
    private translateService: TranslateService,
    activeRouter: ActivatedRoute,
    router: Router
  ) {
    activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = paramMap.get("name");
      console.log(this.word);
      this.mean = this.translateService.getMean(this.word);
    });
  }

  ngOnInit(): void {}
}
