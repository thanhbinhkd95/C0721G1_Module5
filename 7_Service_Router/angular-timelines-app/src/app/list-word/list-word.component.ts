import { Router } from '@angular/router';
import { TranslateService } from './../service/translate.service';
import { Word } from './../model/word';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-list-word",
  templateUrl: "./list-word.component.html",
  styleUrls: ["./list-word.component.css"],
})
export class ListWordComponent implements OnInit {
  words: Word[];

  constructor(private wordService: TranslateService, private router: Router) {}

  ngOnInit(): void {
    this.words = this.wordService.wordArr;
  }

  navigation(word: string) {
    this.router.navigate(["translate", word]);
  }
}
