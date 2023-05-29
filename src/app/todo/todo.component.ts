import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo-model';
import { TodoService } from '../shared/todo.service';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  newTodo = new Todo();
  filterInput: string = "";

  constructor(private _todoService: TodoService){}

  ngOnInit(): void {
    this._todoService.getTodos().subscribe((response) => {
      this.todos = response;
      this.filteredTodos = response;
    })
  }

  onSubmit(todo: Todo){
    this._todoService.addTodo(todo).subscribe((response) => {
      this.todos.push(response);
    })
  }
  
  onPriorityFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if(filterValue === '0'){
      this.filteredTodos = this.todos;
    }
    else{
      this.filteredTodos = this.todos.filter(todo => todo.priority === filterValue);

    }
  }

}
