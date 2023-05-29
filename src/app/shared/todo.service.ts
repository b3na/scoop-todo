import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo-model';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url: string = 'http://localhost:3000'

  constructor(private _http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTodos(): Observable<Todo> {
    return this._http.get<Todo>(this.url + '/todos')
  }
}
