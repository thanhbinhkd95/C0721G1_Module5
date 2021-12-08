import { Word } from "./../model/word";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TranslateService {
  [x: string]: any;
  wordArr: Word[] = [
    { word: "name", mean: "họ và tên" },
    { word: "age", mean: "tuoi" },
    { word: "date of birth", mean: "ngay sinh" },
    { word: "address", mean: "dia chi" },
    { word: "dog", mean: "cho" },
    { word: "cat", mean: "meo" },
    { word: "sheep", mean: "cuu" },
    { word: "handsome", mean: "Dep trai" },
    { word: "hearts", mean: "tan vo" },
  ];

  constructor() {}

  getMean(word: string) {
    return this.wordArr.find((value: Word) => value.word ===word).mean;
  }

}
