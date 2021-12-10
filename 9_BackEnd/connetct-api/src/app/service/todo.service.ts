import { TodoWord } from "./../interface/todo-word";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private URL_TODO = "http://localhost:3000/todo";
  constructor(private http: HttpClient) {}
  getAll(): Observable<TodoWord[] | any> {
    return this.http.get(this.URL_TODO);
  }
  createWord(word: TodoWord) {
    return this.http.post(this.URL_TODO, word);
  }
  deleteWord(word: TodoWord) {
    return this.http.delete(this.URL_TODO + "/" + word.id);
  }
  editWord(word: TodoWord) {
    return this.http.put(this.URL_TODO + "/" + word.id, word);
  }
}
